/* Varied, author-written chapters — group: foundations. */
window.AI_ATLAS_CHAPTERS = Object.assign(window.AI_ATLAS_CHAPTERS || {}, {
  "ai-vs-ml": {
    "intro": "AI, machine learning, deep learning và LLM không phải bốn từ đồng nghĩa. Chúng nằm ở những tầng khái niệm khác nhau, và agent lại thuộc một góc nhìn khác.",
    "minutes": 8,
    "sections": [
      {
        "type": "compare",
        "title": "Đặt đúng vị trí",
        "rows": [
          [
            "Artificial Intelligence",
            "Mục tiêu và lĩnh vực xây dựng hệ thống có năng lực như suy luận, lập kế hoạch, nhận biết, tương tác."
          ],
          [
            "Machine Learning",
            "Nhóm phương pháp cho phép mô hình rút ra quy luật từ dữ liệu/trải nghiệm thay vì mã hóa từng quy tắc bằng tay."
          ],
          [
            "Deep Learning",
            "Một họ ML dùng mạng nhiều tầng và biểu diễn học được."
          ],
          [
            "Large Language Model",
            "Mô hình được train ở quy mô lớn trên dữ liệu ngôn ngữ (thường có thêm modality khác) để xử lý, sinh và biến đổi chuỗi token."
          ],
          [
            "AI Agent",
            "Hệ thống dùng model và/hoặc logic để thực hiện các bước hướng đến mục tiêu, tương tác với môi trường và công cụ."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Một phép thử nhanh bằng ví dụ",
        "text": "A* tìm đường là một thuật toán AI cổ điển nhưng không cần neural network. Một hệ thống dự đoán doanh số bằng linear regression thuộc ML mà không phải deep learning. Một mô hình dịch văn bản dựa trên Transformer là deep learning. Một coding agent dùng LLM và terminal là ứng dụng nhiều thành phần, không phải “một model mới”.\n\nHệ thống thực tế thường là tổ hợp. Cách phân loại này giúp đặt đúng câu hỏi khi gặp lỗi: lỗi nằm ở dữ liệu, model, prompt, tool, orchestration hay UI?"
      },
      {
        "type": "question",
        "title": "Tự kiểm tra",
        "text": "Nếu một agent chạy sai command dù model đã trả lời đúng cú pháp, nguyên nhân có thể không nằm trong LLM. Bạn sẽ kiểm tra các thành phần nào trước?"
      }
    ]
  },
  "supervised": {
    "intro": "Tên gọi các kiểu học cho biết tín hiệu tối ưu đến từ đâu. Đó là chiếc chìa khóa để hiểu pretraining và post-training của LLM.",
    "minutes": 12,
    "sections": [
      {
        "type": "compare",
        "title": "Ba nguồn tín hiệu học",
        "rows": [
          [
            "Supervised learning",
            "Dữ liệu có input và mục tiêu do con người hoặc quy trình khác cung cấp; ví dụ ảnh → nhãn."
          ],
          [
            "Self-supervised learning",
            "Mục tiêu được tạo từ chính dữ liệu; ví dụ cho một đoạn văn, dự đoán token tiếp theo."
          ],
          [
            "Reinforcement learning",
            "Hệ thống học hành động để tối ưu reward theo trải nghiệm và feedback, thường có bài toán credit assignment và exploration."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Self-supervised không có nghĩa không có nhãn",
        "text": "Trong language modeling, văn bản tự tạo ra cả đầu vào lẫn target: từ dãy token [A,B,C,D], ta dùng [A,B,C] để dự đoán D. Không cần người đọc từng câu và gắn nhãn nội dung, nhưng loss vẫn so đầu ra với target cụ thể.\n\nỞ supervised fine-tuning của assistant, dataset thường có cặp chỉ dẫn và câu trả lời mong muốn. Với preference optimization, tín hiệu có thể đến từ việc so sánh hai câu trả lời. Các quy trình hiện đại có nhiều biến thể, không nên đồng nhất mọi post-training với một thuật toán RL duy nhất."
      },
      {
        "type": "steps",
        "title": "Đọc một training setup như developer",
        "items": [
          {
            "title": "Xác định input / target",
            "text": "Mỗi sample gồm gì? Target do ai hoặc quá trình nào tạo?"
          },
          {
            "title": "Xác định objective",
            "text": "Loss là cross-entropy, reward, pairwise preference hay một biểu thức khác?"
          },
          {
            "title": "Xác định data distribution",
            "text": "Tập train có đại diện cho lúc chạy thật không? Có leakage không?"
          },
          {
            "title": "Chọn validation",
            "text": "Đánh giá chất lượng dựa vào kết quả thực hay chỉ dựa vào training loss?"
          }
        ]
      },
      {
        "type": "question",
        "title": "Lấy ví dụ từ sản phẩm",
        "text": "Nếu bạn dùng lịch sử pull request được merge để train một coding assistant, đâu là phần input và đâu là target? Những kiểu dữ liệu bị thiên lệch hoặc thiếu thông tin nào có thể làm model học sai?"
      }
    ]
  },
  "vectors": {
    "intro": "Vector không phải toán trang trí: nó là định dạng mà phần lớn phép tính bên trong neural network sử dụng để biểu diễn và biến đổi thông tin.",
    "minutes": 14,
    "sections": [
      {
        "type": "text",
        "title": "Từ một giá trị đến không gian nhiều chiều",
        "text": "Scalar là một số. Vector là một dãy số có thứ tự, chẳng hạn [0.2, -0.5, 1.1]. Trong ML, vector có thể biểu diễn features của khách hàng, embedding của token hay trạng thái trung gian của một network. Mỗi chiều không nhất thiết có tên mà con người hiểu được.\n\nDot product của hai vector là tổng tích theo từng chiều. Nó được dùng rộng rãi để đo mức phù hợp và trong phép biến đổi tuyến tính. Euclidean distance lại đo khoảng cách trong không gian; cosine similarity nhìn vào góc, giảm ảnh hưởng của độ lớn vector."
      },
      {
        "type": "code",
        "title": "Tính dot product bằng tay",
        "code": "a = [1, 2, 3]\nb = [2, 0, 4]\n\ndot(a, b) = 1*2 + 2*0 + 3*4 = 14\nnorm(a) = sqrt(1² + 2² + 3²) = sqrt(14)\nnorm(b) = sqrt(2² + 0² + 4²) = sqrt(20)\ncosine_similarity = dot(a,b)/(norm(a)*norm(b))",
        "language": "PSEUDOCODE",
        "text": "Con số cosine gần 0.837 cho thấy hai vector khá cùng hướng trong ví dụ này; nó không tự động có nghĩa hai đoạn văn “đúng bằng nhau”."
      },
      {
        "type": "text",
        "title": "Ma trận là cách làm trên nhiều vector",
        "text": "Một phép biến đổi tuyến tính thường viết y = Wx + b, trong đó W là ma trận tham số. Nếu input có d chiều, output có k chiều, W thường có shape k × d theo quy ước vector cột. Khi nhìn vào attention, bạn sẽ gặp chính kiểu nhân ma trận này để tạo Q, K, V từ hidden states.\n\nĐây cũng là lý do khi debug code deep learning, theo dõi tensor shapes thường hiệu quả hơn đọc từng dòng tính toán."
      },
      {
        "type": "note",
        "title": "Trực giác đúng nhưng chưa đủ",
        "text": "Embedding có thể mã hóa mối quan hệ ngữ nghĩa hữu ích, song “khoảng cách gần = ý nghĩa giống nhau” luôn phụ thuộc mô hình, cách train, thước đo và dữ liệu."
      },
      {
        "type": "question",
        "title": "Thử một tensor shape",
        "text": "Có 128 token, mỗi token là vector 768 chiều. Tensor biểu diễn batch 1 có shape nào? Nếu nhân với ma trận W kích thước 768 × 256 (quy ước row vectors), shape output là gì?"
      }
    ]
  },
  "probability": {
    "intro": "LLM thường không chọn trực tiếp một từ chắc chắn đúng. Nó tính score cho các token ứng viên rồi biến score thành phân phối xác suất để chọn token tiếp theo.",
    "minutes": 15,
    "sections": [
      {
        "type": "text",
        "title": "Logits và xác suất",
        "text": "Cho một input context, model tạo logits — một số thực cho mỗi token trong vocabulary. Logit không phải xác suất: nó có thể âm, lớn hơn 1, và tổng các logits không cần bằng 1. Softmax biến logits thành số không âm có tổng bằng 1, bằng cách lấy exp từng logit rồi chuẩn hóa.\n\nGiả sử model chấm ba token là [2, 1, 0]. Softmax cho phân phối xấp xỉ [0.665, 0.245, 0.090]. Token có score cao nhất được ưu tiên, nhưng các token khác vẫn có xác suất xuất hiện nếu sampling không phải greedy."
      },
      {
        "type": "code",
        "title": "Softmax và temperature",
        "code": "softmax(z_i / T) = exp(z_i / T) / sum_j exp(z_j / T)\n\nz = [2, 1, 0]\nT = 1.0  # phân phối có mức phân tán tiêu chuẩn\nT = 0.5  # ưu tiên token cao điểm mạnh hơn\nT = 2.0  # phân phối phẳng hơn",
        "language": "PSEUDOCODE",
        "text": "Temperature là một phần của decoding, không làm thay đổi trọng số model. T bằng 0 thường được hiện thực thành greedy decoding thay vì phép chia cho 0."
      },
      {
        "type": "text",
        "title": "Đừng nhầm xác suất với độ tin cậy về sự thật",
        "text": "Xác suất next token là mức phù hợp theo phân phối mà model học và context hiện có; không phải xác suất một mệnh đề trong đời thực là đúng. Một câu rất tự nhiên có thể sai sự thật. Một câu chính xác nhưng lạ trong dữ liệu train có thể bị đánh giá thấp.\n\nCross-entropy loss là cách thường gặp để khuyến khích model đặt nhiều xác suất hơn vào target token của dữ liệu train. Nó không trực tiếp đảm bảo factuality hay helpfulness."
      },
      {
        "type": "question",
        "title": "Tự bấm máy",
        "text": "Nếu hai token có cùng logit, xác suất của chúng dưới softmax có bằng nhau không? Khi tăng temperature từ 0.5 lên 2, xác suất token đứng đầu thường thay đổi theo hướng nào? Mở playground để đối chiếu."
      }
    ]
  },
  "loss": {
    "intro": "Loss biến mục tiêu học thành một con số mà optimizer có thể giảm. Chọn sai loss hoặc đo sai metric sẽ khiến model “học tốt” nhưng sản phẩm vẫn tệ.",
    "minutes": 14,
    "sections": [
      {
        "type": "text",
        "title": "Loss trả lời câu hỏi gì?",
        "text": "Một regression model dự đoán giá nhà có thể dùng mean squared error: lấy bình phương sai lệch rồi tính trung bình. Một classifier nhiều lớp có thể dùng cross-entropy. Với language model, mục tiêu phổ biến là tối đa hóa xác suất của target token trong ngữ cảnh, tương đương giảm negative log-likelihood.\n\nCó một điểm quan trọng: training loss dùng để cập nhật weights; còn metric sản phẩm nên đo điều bạn thật sự muốn. Một model viết code có loss thấp hơn không có nghĩa tự động sửa bug tốt hơn ở repo thực."
      },
      {
        "type": "code",
        "title": "Cross-entropy cho một token",
        "code": "# Target token có xác suất p(target)=0.8\nloss = -log(0.8) ~= 0.223\n\n# Model kém tự tin hơn vào target:\nloss = -log(0.1) ~= 2.303\n\n# Training trung bình loss qua các token/batch\nloss_batch = mean(-log p(target_i | context_i))",
        "language": "PSEUDOCODE",
        "text": "Đây là ví dụ cho từng target token. Một sequence có thể cộng hoặc lấy trung bình loss với mask phù hợp, tránh tính những vị trí không có target."
      },
      {
        "type": "compare",
        "title": "Tối ưu sai thứ thì chuyện gì xảy ra?",
        "rows": [
          [
            "Accuracy",
            "Có thể đánh lừa trên dữ liệu mất cân bằng."
          ],
          [
            "Training loss",
            "Giảm được nhờ ghi nhớ; cần validation trên dữ liệu ngoài train."
          ],
          [
            "Task success rate",
            "Gần mục tiêu sản phẩm hơn, nhưng cần định nghĩa test case và tiêu chí pass rõ ràng."
          ],
          [
            "Latency / cost",
            "Một model tốt hơn về chất lượng nhưng quá chậm hoặc đắt vẫn có thể không dùng được."
          ]
        ]
      },
      {
        "type": "question",
        "title": "Đặt metric cho coding agent",
        "text": "Giữa pass@1 trên test ẩn, tỉ lệ task hoàn thành, số lần chạy tool và chi phí token, metric nào là mục tiêu chính? Metric nào là guardrail?"
      }
    ]
  },
  "gradient": {
    "intro": "Gradient cho biết khi thay đổi tham số rất nhỏ, loss sẽ tăng hay giảm theo hướng nào. Backpropagation là cách tính gradient hiệu quả qua nhiều lớp mạng.",
    "minutes": 17,
    "sections": [
      {
        "type": "text",
        "title": "Tưởng tượng đang đi xuống một bề mặt",
        "text": "Với hàm f(x) = (x − 3)², đạo hàm f'(x) = 2(x − 3). Nếu đang ở x = 0, đạo hàm âm: tăng x một chút sẽ làm loss giảm. Nếu đang ở x = 5, đạo hàm dương: giảm x sẽ giúp tốt hơn. Gradient descent cập nhật x ← x − learning_rate × gradient.\n\nTrong mạng neural có hàng triệu hay hàng tỷ tham số, ta cần gradient theo tất cả tham số. Dùng finite differences cho từng weights sẽ quá tốn. Backpropagation sử dụng chain rule đi ngược đồ thị phép tính để tái sử dụng kết quả trung gian."
      },
      {
        "type": "code",
        "title": "Một bước gradient descent",
        "code": "x = 0.0\nlearning_rate = 0.1\n\nfor step in range(5):\n    loss = (x - 3)**2\n    grad = 2*(x - 3)\n    x = x - learning_rate*grad\n    print(step, round(x, 3), round(loss, 3))\n\n# x: 0.6, 1.08, 1.464, 1.771, 2.017\n# loss giảm dần về 0, nhưng chưa tới tối ưu sau 5 bước",
        "language": "PSEUDOCODE",
        "text": "Bài toán thực tế có nhiều chiều, noise do mini-batch và landscape không lồi. Nhưng nguyên lý cập nhật vẫn xuất phát từ gradient."
      },
      {
        "type": "steps",
        "title": "Backprop tóm tắt trên graph",
        "items": [
          {
            "title": "Forward",
            "text": "Lưu các giá trị trung gian cần thiết để tính đạo hàm."
          },
          {
            "title": "Tính đạo hàm ở loss",
            "text": "Ví dụ dL/dprediction cho target đang xét."
          },
          {
            "title": "Chain rule ngược về weights",
            "text": "Nhân các đạo hàm cục bộ theo cạnh của đồ thị; cộng gradient nếu nhiều nhánh cùng đóng góp."
          },
          {
            "title": "Optimizer update",
            "text": "SGD, Adam và các biến thể dùng gradient theo những cách khác nhau để cập nhật tham số."
          }
        ]
      },
      {
        "type": "note",
        "title": "Hai lỗi trực giác phổ biến",
        "text": "Gradient không “đi tìm sự thật”, nó chỉ chỉ hướng giảm objective đã chọn. Learning rate quá cao có thể làm loss dao động; quá thấp có thể học chậm. Khi model overfit, train loss giảm nhưng validation metric có thể xấu đi."
      },
      {
        "type": "question",
        "title": "Thử sửa code",
        "text": "Hãy thay learning_rate từ 0.1 thành 1.1 trong ví dụ. Vì sao cập nhật bắt đầu dao động và diverge?"
      }
    ]
  },
  "neural-network": {
    "intro": "Neural network là một hàm có tham số gồm nhiều lớp biến đổi. Nó học được nhờ cách kết hợp forward pass, loss, backprop và optimizer.",
    "minutes": 16,
    "sections": [
      {
        "type": "text",
        "title": "Một neuron nhân tạo rất giản lược",
        "text": "Bắt đầu với y = activation(w · x + b). Phần w · x + b là phép biến đổi tuyến tính; activation như ReLU đưa phi tuyến vào hệ thống. Nếu chồng nhiều lớp chỉ toàn tuyến tính, toàn bộ vẫn rút gọn thành một phép tuyến tính duy nhất. Chính phi tuyến và cấu trúc nhiều tầng giúp mô hình biểu diễn quan hệ phức tạp.\n\nMột network không nhất thiết phải giống bộ não sinh học. “Neuron” ở đây là phép toán trên tensor, được lập trình để có thể train bằng gradient."
      },
      {
        "type": "code",
        "title": "MLP hai lớp và tensor shapes",
        "code": "# x shape: [batch, 4]\n# W1: [4, 8], b1: [8]\n# W2: [8, 2], b2: [2]\n\nhidden = relu(x @ W1 + b1)  # [batch, 8]\nlogits = hidden @ W2 + b2  # [batch, 2]\nloss = cross_entropy(logits, labels)\nloss.backward()\noptimizer.step()\noptimizer.zero_grad()",
        "language": "PSEUDOCODE",
        "text": "Code giả lập theo cú pháp PyTorch. Cần có training loop, data loader và optimizer thực tế mới chạy đầy đủ."
      },
      {
        "type": "text",
        "title": "Vì sao số tham số không nói hết mọi thứ?",
        "text": "Số weights ảnh hưởng capacity, nhưng kiến trúc, dữ liệu, mục tiêu tối ưu, regularization, thời gian train và cách sử dụng model cũng quan trọng. Một network lớn không mặc nhiên tổng quát tốt nếu data distribution kém. Ngược lại, model nhỏ đủ tốt cho một nhiệm vụ cụ thể có thể giảm rất nhiều chi phí khi deploy.\n\nTransformer mà bạn sắp đọc là một cấu trúc neural network chuyên xử lý sequence. Nó vẫn xây trên nền tảng tensor operations, nonlinearity và backprop này."
      },
      {
        "type": "question",
        "title": "Kiểm tra shape",
        "text": "Trong ví dụ trên, nếu input batch=32 thì hình dạng hidden và logits sẽ là gì? Vì sao không thể bỏ ReLU mà vẫn hy vọng hai lớp tuyến tính tạo thêm khả năng biểu diễn phi tuyến?"
      }
    ]
  }
});
