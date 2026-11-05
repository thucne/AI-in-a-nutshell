/* Varied, author-written chapters — group: training. */
window.AI_ATLAS_CHAPTERS = Object.assign(window.AI_ATLAS_CHAPTERS || {}, {
  "pretraining": {
    "intro": "Pretraining là giai đoạn model học các pattern lớn từ dữ liệu trước khi được điều chỉnh thành trợ lý. Hiểu giai đoạn này giúp phân biệt năng lực nền với hành vi theo chỉ dẫn.",
    "minutes": 18,
    "sections": [
      {
        "type": "text",
        "title": "Không có ai gắn nhãn hàng nghìn tỷ token theo cách thủ công",
        "text": "Trong causal language modeling, một chuỗi văn bản tự cung cấp target của chính nó: dự đoán token thứ t từ các token trước đó. Model học bằng cách giảm cross-entropy trên một tập dữ liệu rất lớn, gồm nhiều thể loại văn bản và đôi khi cả code, toán, dữ liệu có cấu trúc. Đây là self-supervised learning.\n\nChất lượng dữ liệu quan trọng không kém lượng dữ liệu: trùng lặp, nội dung kém chất lượng, dữ liệu độc hại hoặc mâu thuẫn, ngôn ngữ bị thiếu đại diện đều có thể ảnh hưởng kết quả. Chi tiết dataset và quyền sử dụng phụ thuộc tổ chức/model, không thể suy từ tên model."
      },
      {
        "type": "steps",
        "title": "Pipeline đơn giản hóa",
        "items": [
          {
            "title": "Thu thập, lọc và chuẩn hóa",
            "text": "Khử trùng lặp, kiểm tra chất lượng, quy tắc nội dung và phạm vi cho phép sử dụng dữ liệu."
          },
          {
            "title": "Tokenize thành sequences",
            "text": "Đóng gói chuỗi theo giới hạn context, tạo masks và targets cho training."
          },
          {
            "title": "Train qua nhiều batch",
            "text": "Tính loss, backprop và optimizer update với hạ tầng phân tán khi model lớn."
          },
          {
            "title": "Đánh giá và chọn checkpoint",
            "text": "Theo dõi validation loss, benchmark đa miền, memorization và rủi ro trước khi chuyển giai đoạn."
          }
        ]
      },
      {
        "type": "text",
        "title": "Kết quả của pretraining là gì?",
        "text": "Mô hình có thể dự đoán và sinh văn bản/code có cấu trúc phức tạp, nhưng chưa chắc phản hồi đúng theo vai trò trợ lý. Một prompt có dạng 'Câu hỏi: ... / Trả lời:' có thể gợi đúng pattern, nhưng model vẫn có thể tiếp tục viết theo phong cách tài liệu hoặc chệch chỉ dẫn. Các bước post-training thường giúp hành vi tương tác nhất quán hơn.\n\nPretraining cũng không đơn giản là “nạp kiến thức vào một database”. Thông tin được phân bố trong tham số và có thể sai, khó truy xuất, không được cập nhật theo thời gian thực."
      },
      {
        "type": "question",
        "title": "Đọc một model card",
        "text": "Hãy tìm model card có mô tả pretraining objective và dữ liệu ở mức tổng quan. Bạn có thể phân biệt 'training tokens', 'context length' và 'model parameters' không?"
      }
    ]
  },
  "training-loop": {
    "intro": "Training loop là nơi phép toán trở thành quá trình học: batch vào, loss ra, gradient ngược, optimizer cập nhật weights, rồi lặp hàng triệu lần.",
    "minutes": 22,
    "sections": [
      {
        "type": "code",
        "title": "Một vòng train theo phong cách PyTorch",
        "code": "model.train()\nfor batch in data_loader:\n    optimizer.zero_grad()\n    inputs, targets = batch\n    logits = model(inputs)\n    loss = cross_entropy(logits, targets)\n    loss.backward()\n    clip_grad_norm_(model.parameters(), max_norm)\n    optimizer.step()\n    scheduler.step()",
        "language": "PSEUDOCODE",
        "text": "Đây là bộ khung. Ở scale lớn còn có mixed precision, gradient accumulation, distributed training, checkpointing và xử lý lỗi GPU."
      },
      {
        "type": "text",
        "title": "Điều gì xảy ra ở mỗi bước?",
        "text": "Forward pass đưa inputs qua model để tạo logits. Loss đo mức phù hợp với targets. Autograd ghi lại các phép toán cần thiết và backward áp dụng chain rule để tính gradient theo weights. Optimizer như AdamW dùng gradient cùng state riêng để cập nhật tham số.\n\nMột bước update không tạo ra “một kiến thức mới” theo kiểu thêm một record. Nó dịch nhẹ nhiều weights để thay đổi phân phối output. Khả năng học tích lũy từ rất nhiều batch và cách tổng quát hóa phụ thuộc mạnh vào dữ liệu, kiến trúc và hyperparameters."
      },
      {
        "type": "compare",
        "title": "Thông số hay gặp khi đọc training config",
        "rows": [
          [
            "Batch size",
            "Số samples/tokens ảnh hưởng gradient estimate, memory và throughput."
          ],
          [
            "Learning rate / schedule",
            "Điều khiển độ lớn bước cập nhật; warmup và decay thường quan trọng."
          ],
          [
            "Gradient clipping",
            "Giới hạn độ lớn gradient để giảm nguy cơ update bất ổn trong một số tình huống."
          ],
          [
            "Validation loss",
            "Theo dõi generalization trên tập chưa dùng để cập nhật weights."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Vì sao một training run có thể thất bại?",
        "text": "NaN có thể xuất hiện từ overflow hoặc tính toán không ổn định. Loss có thể giảm nhưng model ghi nhớ dữ liệu, làm metric thực tế không tăng. Training distributed còn gặp vấn đề đồng bộ, hiệu suất giao tiếp, straggler và checkpoint. Đó là lý do logging, reproducibility và thiết kế eval nên có từ đầu, không phải đợi train xong."
      },
      {
        "type": "question",
        "title": "Tự viết thử",
        "text": "Train một MLP dự đoán XOR hoặc phân loại dữ liệu hai chiều. Thử bỏ zero_grad(), tăng learning rate quá cao và bỏ activation. Quan sát sự khác nhau của loss và boundary."
      }
    ]
  },
  "sft": {
    "intro": "Supervised fine-tuning (SFT) là một cách phổ biến để chuyển mô hình nền thành mô hình biết phản hồi theo chỉ dẫn, bằng cách học từ các cặp yêu cầu và câu trả lời mong muốn.",
    "minutes": 16,
    "sections": [
      {
        "type": "text",
        "title": "Dữ liệu instruction trông ra sao?",
        "text": "Một mẫu có thể gồm system context, user request và assistant response được viết hoặc chọn làm target. Ở nhiều setup, loss chỉ tính trên các token câu trả lời assistant, không tính mọi token trong prompt. Mục tiêu là làm cho model có xu hướng sinh phản hồi giống các ví dụ chất lượng.\n\nChất lượng dữ liệu SFT thường quan trọng hơn cách trình bày file JSON. Nếu dataset chứa câu trả lời dài dòng, tự tin dù không có bằng chứng hoặc lạm dụng format, model có thể học cả những thói quen đó."
      },
      {
        "type": "code",
        "title": "Một mẫu JSONL tối giản",
        "code": "{\n  \"messages\": [\n    {\"role\": \"user\", \"content\": \"Giải thích vòng lặp event loop của JS.\"},\n    {\"role\": \"assistant\", \"content\": \"Hãy bắt đầu với call stack...\"}\n  ]\n}\n\n# Khi train, cần áp chat template đúng với model,\n# tạo masks cho vị trí cần dự đoán,\n# và chỉ tính loss trên target tokens phù hợp.",
        "language": "PSEUDOCODE",
        "text": "Format thật phụ thuộc stack training và chat template; các role tokens không giống nhau ở mọi model."
      },
      {
        "type": "text",
        "title": "SFT khác với thêm tài liệu vào prompt",
        "text": "Prompting đặt thông tin vào context ở thời điểm inference, không cập nhật weights. SFT thay đổi weights, ảnh hưởng xu hướng phản hồi trên nhiều input. Fine-tuning có thể hữu dụng khi cần một hành vi lặp đi lặp lại, format đặc thù hoặc domain hẹp. Nhưng nếu kiến thức thay đổi hàng ngày, retrieval có thể phù hợp hơn việc train lại liên tục.\n\nSFT cũng không tự động loại bỏ hallucination: nó dạy kiểu phản hồi mong muốn dựa trên ví dụ, còn tính đúng đắn cần kiểm chứng theo từng nhiệm vụ."
      },
      {
        "type": "question",
        "title": "Chọn giải pháp",
        "text": "Ứng dụng nội bộ cần trả lời về quy trình HR thay đổi mỗi tháng. Bạn sẽ bắt đầu bằng SFT hay RAG? Tại sao? Khi nào SFT trở nên đáng cân nhắc?"
      }
    ]
  },
  "rlhf": {
    "intro": "Sau SFT, nhiều hệ thống cần thêm tín hiệu về chất lượng câu trả lời: hữu ích, chính xác, an toàn và phù hợp mong đợi. Preference optimization là một nhóm cách tiếp cận.",
    "minutes": 20,
    "sections": [
      {
        "type": "text",
        "title": "Vì sao chỉ imitation chưa đủ?",
        "text": "Trong SFT, model học bắt chước target response. Nhưng với một câu hỏi thường có nhiều câu trả lời hợp lệ và chất lượng khác nhau. Dữ liệu preference có thể ghi lại: với prompt P, response A được ưu tiên hơn response B theo tiêu chí cụ thể.\n\nQuy trình RLHF cổ điển gồm thu thập so sánh của con người, train reward model để dự đoán preference rồi tối ưu policy bằng RL, chẳng hạn PPO. Các hệ thống hiện đại còn có phương pháp trực tiếp tối ưu preference như DPO và nhiều biến thể; không phải tất cả đều cần reward model riêng và cùng một pipeline."
      },
      {
        "type": "steps",
        "title": "Một quy trình preference (đơn giản)",
        "items": [
          {
            "title": "Lấy hai hoặc nhiều đáp án",
            "text": "Cho cùng một prompt, tạo các candidate từ model hiện tại hoặc model khác."
          },
          {
            "title": "Gắn nhãn theo tiêu chí",
            "text": "Người đánh giá hoặc tín hiệu được thiết kế chọn output tốt hơn; tiêu chí phải rõ và nhất quán."
          },
          {
            "title": "Chuyển preference thành objective",
            "text": "Reward model + RL hoặc objective trực tiếp như DPO."
          },
          {
            "title": "Kiểm tra trade-offs",
            "text": "Đo helpfulness, factuality, refusal quality, verbosity, robustness và các kiểu gaming reward."
          }
        ]
      },
      {
        "type": "text",
        "title": "Reward hacking là gì?",
        "text": "Nếu reward quá đơn giản, model có thể học cách tối đa hóa điểm mà không giải quyết tốt mục tiêu thật. Ví dụ chấm câu trả lời theo một số dấu hiệu bề mặt có thể khiến model thêm từ khóa hoặc kéo dài phần giải thích thay vì tăng độ chính xác.\n\nĐiều này rất gần với kinh nghiệm software engineering: tối ưu KPI không đúng nghĩa đôi khi tạo ra sản phẩm tệ hơn. Cần eval độc lập, bao gồm trường hợp bất lợi và tác vụ thật."
      },
      {
        "type": "note",
        "title": "Một điểm nên nhớ",
        "text": "Preference data phản ánh guideline và người/nguồn đánh giá cụ thể, không đại diện cho “ý kiến toàn nhân loại”. Các tổ chức có những lựa chọn, giới hạn và trade-off khác nhau khi hậu huấn luyện."
      },
      {
        "type": "question",
        "title": "Tự thiết kế tiêu chí",
        "text": "Nếu tối ưu assistant viết code, thế nào là “output tốt hơn”: ít token hơn, test pass, diff nhỏ, dễ review hay tuân thủ quyền truy cập? Bạn sẽ kết hợp chúng ra sao?"
      }
    ]
  },
  "lora": {
    "intro": "LoRA cho phép fine-tune hiệu quả hơn bằng cách học các cập nhật hạng thấp cho một số ma trận tham số, thay vì cập nhật toàn bộ weights gốc.",
    "minutes": 16,
    "sections": [
      {
        "type": "text",
        "title": "Ý tưởng hạng thấp",
        "text": "Trong fine-tuning đầy đủ, một ma trận W kích thước d × k được cập nhật trực tiếp. LoRA giữ W gốc cố định và học phần bù ΔW = A × B, với rank r nhỏ hơn nhiều so với d và k. Như vậy số tham số train thêm có thể thấp hơn đáng kể.\n\nVí dụ với W kích thước 4096 × 4096, cập nhật đầy đủ gồm khoảng 16,8 triệu tham số. Nếu dùng rank r=8, hai ma trận bổ sung có khoảng 65 nghìn tham số (8 × (4096+4096)), chưa tính bias hay những phần khác nếu cũng train."
      },
      {
        "type": "code",
        "title": "Công thức nhìn bằng shape",
        "code": "W: [4096, 4096]       # pretrained, frozen\nA: [4096, 8]          # trainable\nB: [8, 4096]          # trainable\n\noutput = x @ (W + scale * (A @ B))\n# scale thường liên quan alpha / r",
        "language": "PSEUDOCODE",
        "text": "Tên A/B, quy ước chiều và cách triển khai có thể khác nhau theo thư viện; ý chính là cập nhật có rank thấp và ít tham số trainable."
      },
      {
        "type": "compare",
        "title": "Khi nào cần cân nhắc?",
        "rows": [
          [
            "LoRA",
            "Khi muốn thích nghi model cho task/domain mà tài nguyên GPU và storage bị giới hạn."
          ],
          [
            "Full fine-tuning",
            "Khi có đủ tài nguyên và mục tiêu cần cập nhật phạm vi tham số rộng; vẫn phải kiểm tra lợi ích so với chi phí."
          ],
          [
            "Prompt/RAG",
            "Khi vấn đề là context/knowledge thay đổi nhanh, có thể rẻ và dễ kiểm soát hơn training."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Giới hạn thực tế",
        "text": "Ít tham số trainable không đồng nghĩa inference tự nhiên rẻ hơn hay chất lượng luôn bằng full fine-tuning. Hiệu quả phụ thuộc rank, layer được áp dụng, dataset, hyperparameters và cách merge/adapters lúc serving. Đặc biệt, đừng nhầm QLoRA — kết hợp quantization và low-rank adapters — với LoRA thông thường."
      },
      {
        "type": "question",
        "title": "Tự tính",
        "text": "Nếu ma trận W có 2048 × 2048 phần tử và rank=16, số tham số A+B là bao nhiêu? Tỉ lệ so với full W là bao nhiêu phần trăm?"
      }
    ]
  },
  "scaling": {
    "intro": "Scaling laws quan sát quan hệ giữa model size, dữ liệu, compute và performance. Chúng giúp đặt ngân sách training, không phải lời hứa rằng cứ tăng tham số thì mọi năng lực đều tăng tuyến tính.",
    "minutes": 17,
    "sections": [
      {
        "type": "text",
        "title": "Cân bằng model, dữ liệu và compute",
        "text": "Khi có một ngân sách compute cố định, ta có thể chọn train model lớn hơn trên ít token hơn hoặc model nhỏ hơn trên nhiều token hơn. Kết quả nghiên cứu về scaling cho thấy có những trade-off tối ưu đáng kể, trong đó các công trình như Chinchilla ảnh hưởng mạnh tới chiến lược phân bổ compute.\n\nNhưng quality của dữ liệu, kiến trúc, objective và quá trình post-training có thể làm kết quả khác dự đoán đơn giản. Một con số parameter count không đủ để xếp hạng hệ thống AI."
      },
      {
        "type": "compare",
        "title": "Các trục scale",
        "rows": [
          [
            "Parameters",
            "Capacity của model và chi phí lưu/serve weights."
          ],
          [
            "Training tokens",
            "Số lượng dữ liệu được dùng để tối ưu; tính đa dạng và chất lượng cũng quan trọng."
          ],
          [
            "Training FLOPs",
            "Ngân sách tính toán để cập nhật model, chịu ảnh hưởng cả phần cứng và hiệu suất triển khai."
          ],
          [
            "Inference compute",
            "Tài nguyên chi cho mỗi request; không giống compute đã dùng để train."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Kết nối với lựa chọn sản phẩm",
        "text": "Một model nhỏ nhưng phục vụ nhanh, kết hợp RAG và tool tốt có thể phù hợp hơn model rất lớn trong một ứng dụng. Với coding agent, total cost còn gồm số lượt gọi tool, những lần retry, context length và tỷ lệ task thất bại.\n\nVì vậy, khi chọn model, nên đo cả quality–latency–cost frontier trên workload thật. Càng có eval, bạn càng ít phải dựa vào marketing hoặc benchmark tổng quát."
      },
      {
        "type": "question",
        "title": "Thiết kế thử nghiệm",
        "text": "So sánh một model nhỏ và một model lớn cho 50 task coding. Ngoài pass rate, hãy thu thập tokens, latency, tool calls và chi phí. Khi nào model lớn hơn thực sự đáng tiền?"
      }
    ]
  }
});
