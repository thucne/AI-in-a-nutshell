/* Varied, author-written chapters — group: history. */
window.AI_ATLAS_CHAPTERS = Object.assign(window.AI_ATLAS_CHAPTERS || {}, {
  "ai-history": {
    "intro": "Để hiểu AI hôm nay, hãy xem nó như cuộc đối thoại lâu dài giữa ba cách tiếp cận: suy luận bằng ký hiệu, học từ dữ liệu và kết hợp chúng thành hệ thống.",
    "minutes": 12,
    "sections": [
      {
        "type": "text",
        "title": "Ba câu hỏi khác nhau về trí thông minh",
        "text": "Có những bài toán mà lời giải nằm ở một tập luật rõ ràng: lập kế hoạch đường đi, kiểm tra điều kiện hợp lệ hoặc chứng minh một mệnh đề. Đây là thế mạnh của symbolic AI. Có những bài toán ta không thể liệt kê hết luật, nhưng lại có hàng triệu ví dụ: nhận diện chữ viết, phân loại email, dự đoán nhu cầu. Machine learning chọn hướng học mẫu từ dữ liệu. Và có những bài toán cần cả hai: một ứng dụng điều phối nhiều thành phần và áp dụng ràng buộc đáng tin cậy bên ngoài model.\n\nKhông có thời điểm nào một nhánh “xóa sổ” toàn bộ nhánh khác. Trong một hệ thống AI hiện đại, ta vẫn thấy code kiểm tra điều kiện, thuật toán tìm kiếm, mô hình xác suất và neural network cùng làm việc."
      },
      {
        "type": "compare",
        "title": "Ba góc nhìn đáng giữ trong đầu",
        "rows": [
          [
            "Symbolic / Search",
            "Tri thức và quy tắc được diễn tả tường minh; dễ kiểm chứng từng bước nhưng khó bao phủ thế giới mở."
          ],
          [
            "Statistical ML",
            "Tối ưu từ ví dụ và nhãn; xử lý được nhiễu, nhưng phụ thuộc dữ liệu và cách đánh giá."
          ],
          [
            "Deep Learning",
            "Học biểu diễn nhiều tầng từ dữ liệu; mạnh với tín hiệu phức tạp, đổi lại khó giải thích và tốn tài nguyên."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Từ nghiên cứu thành sản phẩm",
        "text": "Trong một sản phẩm thực, câu hỏi quan trọng không chỉ là “model mạnh đến đâu?” mà là “năng lực nào thuộc model và năng lực nào thuộc phần mềm bao quanh?”. Search engine dùng chỉ mục và ranking; một coding agent dùng LLM để đề xuất hành động, sau đó gọi tool, nhận kết quả, kiểm tra và đôi khi thử lại. Cách nhìn này giải thích vì sao biết phát triển phần mềm vẫn có giá trị rất lớn khi xây AI."
      },
      {
        "type": "question",
        "title": "Quan sát một sản phẩm quen thuộc",
        "text": "Chọn một chức năng có AI mà bạn dùng hằng ngày. Hãy chia nó thành: phần dùng quy tắc cố định, phần học từ dữ liệu, phần quản lý trạng thái hoặc tương tác với thế giới. Bạn có thể tách được mấy phần?"
      }
    ]
  },
  "symbolic": {
    "intro": "Trước khi model học xác suất từ dữ liệu khổng lồ, nhiều nhà nghiên cứu thử diễn tả trí thông minh như thao tác trên ký hiệu và tìm kiếm trong không gian trạng thái.",
    "minutes": 14,
    "sections": [
      {
        "type": "text",
        "title": "Một bài toán được mô tả như thế nào?",
        "text": "Hãy hình dung robot cần đi từ phòng A sang phòng B. Ta định nghĩa trạng thái (vị trí robot), những hành động được phép (đi qua cửa), điều kiện mục tiêu (đến phòng B) và chi phí (thời gian). Thuật toán tìm kiếm không cần học từ hàng triệu ví dụ mới tìm được đường đi. Nó duyệt các khả năng theo quy tắc.\n\nCùng tư duy đó, một hệ thống chứng minh định lý biểu diễn mệnh đề và quy tắc suy diễn. Một hệ thống tri thức có thể lưu facts và áp dụng luật IF–THEN để tạo suy luận mới. Điểm mấu chốt: biểu diễn là do người thiết kế chọn, thay vì được mô hình tự học hoàn toàn từ dữ liệu."
      },
      {
        "type": "steps",
        "title": "Một lượt tìm kiếm có heuristic",
        "items": [
          {
            "title": "Đặt trạng thái ban đầu",
            "text": "Ví dụ vị trí hiện tại, những bước đã đi và mục tiêu cần đến."
          },
          {
            "title": "Sinh trạng thái kế tiếp",
            "text": "Áp dụng những hành động hợp lệ; bỏ qua nước đi vi phạm luật."
          },
          {
            "title": "Ưu tiên bước có triển vọng",
            "text": "Dùng heuristic để ước lượng chi phí còn lại. Với A*, điểm ưu tiên thường là f(n) = g(n) + h(n)."
          },
          {
            "title": "Dừng khi đạt mục tiêu",
            "text": "Nếu điều kiện phù hợp, trả lại chuỗi hành động thay vì chỉ trả lời ‘có’ hoặc ‘không’."
          }
        ]
      },
      {
        "type": "code",
        "title": "A* nhìn bằng pseudocode",
        "code": "frontier = priority_queue()\nfrontier.push(start, priority=0)\ncost[start] = 0\n\nwhile frontier:\n    state = frontier.pop_min()\n    if goal(state):\n        return reconstruct_path(state)\n    for next_state, step_cost in neighbors(state):\n        new_cost = cost[state] + step_cost\n        if next_state not in cost or new_cost < cost[next_state]:\n            cost[next_state] = new_cost\n            frontier.push(next_state,\n                priority=new_cost + heuristic(next_state))",
        "language": "PSEUDOCODE",
        "text": "Pseudocode trên bỏ qua một số chi tiết triển khai như stale queue entries. Nó minh họa rõ phần tách biệt giữa thuật toán tìm kiếm và tri thức về miền bài toán."
      },
      {
        "type": "text",
        "title": "Mạnh ở đâu, vướng ở đâu?",
        "text": "Các hệ thống này có lợi thế khi quy tắc rõ ràng và kết quả cần kiểm chứng. Nhưng thế giới ngôn ngữ tự nhiên không được phân tách gọn thành các ký hiệu. Ngay cả việc hình thức hóa “một chiếc cốc còn dùng được không” cũng có vô số điều kiện ngoại lệ. Đây là một trong những lý do hướng học từ dữ liệu ngày càng quan trọng.\n\nNăm 1956, hội thảo Dartmouth thường được nhắc như cột mốc định danh lĩnh vực artificial intelligence. Nhưng đừng hiểu rằng từ đó đến khi xuất hiện deep learning chỉ có mỗi rule-based AI."
      },
      {
        "type": "question",
        "title": "Tự nối về coding agents",
        "text": "Trong Codex/Claude Code, thành phần nào giống symbolic search hơn là neural network? Hãy nghĩ tới dependency resolution, test runner, static analysis và bộ quy tắc cho phép/không cho phép gọi tool."
      }
    ]
  },
  "expert-systems": {
    "intro": "Expert system là ví dụ thú vị về việc AI từng thành công trong những miền rất hẹp — và vì sao thành công đó không dễ mở rộng.",
    "minutes": 11,
    "sections": [
      {
        "type": "text",
        "title": "Giá trị của một kho tri thức tường minh",
        "text": "Một expert system thường có knowledge base lưu tri thức ở dạng luật và inference engine áp dụng các luật lên dữ kiện đầu vào. Trong miền hẹp như chẩn đoán một số lỗi thiết bị hoặc cấu hình sản phẩm, cách này có thể tạo ra câu trả lời nhất quán với tri thức đã mã hóa.\n\nChúng cũng cho người vận hành lần theo chuỗi suy diễn: hệ thống chọn kết luận nào vì luật nào. Đây là kiểu tính minh bạch vẫn rất đáng giá trong phần mềm hiện đại."
      },
      {
        "type": "compare",
        "title": "Hai chi phí ít được nhìn thấy",
        "rows": [
          [
            "Thu thập luật",
            "Chuyên gia có thể làm đúng nhưng khó diễn tả hết quy trình ra quyết định thành một tập IF–THEN."
          ],
          [
            "Bảo trì luật",
            "Khi một luật mới tương tác với nhiều luật cũ, số trường hợp cần kiểm tra tăng rất nhanh."
          ],
          [
            "Hiểu ngữ cảnh",
            "Hệ thống chỉ biết điều đã được mã hóa; ngoại lệ và kiến thức đời thường dễ trở thành lỗ hổng."
          ]
        ]
      },
      {
        "type": "text",
        "title": "AI winter không phải lúc AI ngừng tồn tại",
        "text": "Trong lịch sử, có những chu kỳ kỳ vọng và ngân sách thay đổi mạnh khi khả năng thực tế không theo kịp lời hứa. Cụm từ “AI winter” nói tới những giai đoạn sụt giảm quan tâm và nguồn lực, chứ không có nghĩa toàn bộ nghiên cứu dừng lại. Nhiều nhánh xác suất, robotics, search và nhận dạng mẫu vẫn phát triển.\n\nBài học dành cho người xây sản phẩm: khi demo thành công với 20 trường hợp, đừng vội coi đó là bằng chứng sẽ chạy tốt với 20.000 trường hợp."
      },
      {
        "type": "question",
        "title": "Thử thiết kế rule engine",
        "text": "Viết năm luật để nhận biết email spam. Sau đó nghĩ thêm ba trường hợp hợp lệ nhưng vô tình kích hoạt luật. Bạn sẽ thấy tại sao sửa một luật có thể làm hỏng những trường hợp trước đó."
      }
    ]
  },
  "statistical-ml": {
    "intro": "Thay vì mô tả từng quy tắc, ta đưa ví dụ và đặt một hàm mục tiêu để mô hình học cách đưa ra dự đoán.",
    "minutes": 13,
    "sections": [
      {
        "type": "text",
        "title": "Ví dụ trước, quy tắc sau",
        "text": "Một bộ lọc spam có thể nhìn vào tần suất từ, domain gửi, cấu trúc email và học mối liên hệ của chúng với nhãn spam/ham. Người lập trình không nhất thiết phải liệt kê chính xác mọi kết hợp dẫn đến spam. Thay vào đó, mô hình chọn tham số sao cho sai số trên dữ liệu huấn luyện giảm đi.\n\nNhưng dữ liệu train không đủ để kết luận model tốt. Nếu vừa học vừa kiểm tra trên cùng tập, mô hình có thể ghi nhớ trường hợp quen thuộc mà không tổng quát hóa."
      },
      {
        "type": "steps",
        "title": "Một workflow ML cổ điển",
        "items": [
          {
            "title": "Chốt bài toán và cách đo",
            "text": "Bạn muốn precision, recall, latency hay tác động kinh doanh? Đừng tối ưu một con số chưa gắn với mục tiêu."
          },
          {
            "title": "Tách train / validation / test",
            "text": "Validation để chọn mô hình; test dành cho đánh giá cuối cùng, tránh vô thức tối ưu theo tập test."
          },
          {
            "title": "Biểu diễn dữ liệu thành features",
            "text": "Một số mô hình dùng features do người thiết kế; neural network hiện đại thường học features từ dữ liệu."
          },
          {
            "title": "Huấn luyện rồi kiểm tra drift",
            "text": "Sau khi deploy, phân phối dữ liệu có thể thay đổi và khiến kết quả giảm."
          }
        ]
      },
      {
        "type": "compare",
        "title": "Không phải ML nào cũng là neural network",
        "rows": [
          [
            "Linear / logistic regression",
            "Dễ triển khai, giải thích tương đối rõ; baseline hữu dụng."
          ],
          [
            "Decision trees / ensembles",
            "Mạnh trên dữ liệu dạng bảng, xử lý tương tác phi tuyến tốt."
          ],
          [
            "Neural networks",
            "Đặc biệt có lợi khi đầu vào nhiều chiều và cần học biểu diễn từ text, image, audio."
          ]
        ]
      },
      {
        "type": "question",
        "title": "Tư duy về dataset",
        "text": "Một mô hình phân loại có accuracy 99% khi 99,5% email đều không phải spam có thực sự tốt không? Bạn sẽ nhìn thêm metric nào để biết nó bỏ sót spam?"
      }
    ]
  },
  "deep-learning": {
    "intro": "Deep learning không chỉ là thêm nhiều lớp: điểm khác biệt là hệ thống có thể học biểu diễn hữu ích thông qua quá trình tối ưu end-to-end.",
    "minutes": 15,
    "sections": [
      {
        "type": "text",
        "title": "Các tầng đang học điều gì?",
        "text": "Ở ML truyền thống, người làm mô hình thường phải xây features trước. Deep learning giảm nhu cầu này bằng cách học chuỗi phép biến đổi: dữ liệu đầu vào đi qua nhiều lớp, mỗi lớp học một biểu diễn giúp bài toán ở lớp cuối dễ giải hơn.\n\nVới hình ảnh, người ta thường dùng ví dụ trực giác rằng các lớp gần đầu xử lý pattern đơn giản, lớp sâu có biểu diễn trừu tượng hơn. Đó là cách hiểu sơ bộ, không phải quy tắc mỗi neuron chỉ biểu diễn một vật thể duy nhất."
      },
      {
        "type": "text",
        "title": "Vì sao 2012–2016 lại là bước ngoặt?",
        "text": "AlexNet thắng lớn trên benchmark ImageNet năm 2012, cho thấy kết hợp dữ liệu lớn, GPU và kiến trúc phù hợp mang lại lợi ích thực tế. Năm 2016, AlphaGo nổi bật với cách kết hợp mạng học sâu, tìm kiếm cây Monte Carlo và học tăng cường. Câu chuyện quan trọng ở đây là sự hội tụ của thuật toán, phần cứng, dữ liệu và cách đánh giá — chứ không phải một ý tưởng “bỗng dưng được phát minh” vào năm 2012."
      },
      {
        "type": "steps",
        "title": "Một vòng cập nhật tham số",
        "items": [
          {
            "title": "Forward pass",
            "text": "Chuyển input qua nhiều lớp để tạo prediction."
          },
          {
            "title": "Tính loss",
            "text": "Đo độ lệch giữa prediction và mục tiêu học."
          },
          {
            "title": "Backpropagation",
            "text": "Dùng chain rule để tính gradient theo tham số của từng lớp."
          },
          {
            "title": "Optimizer step",
            "text": "Cập nhật weights, lặp lại trên nhiều batch và theo dõi metric ngoài train."
          }
        ]
      },
      {
        "type": "note",
        "title": "Lưu ý khi nói mô hình 'hiểu'",
        "text": "Một mạng học biểu diễn thống kê rất phong phú, nhưng đừng suy từ độ chính xác trên benchmark sang khả năng suy luận đáng tin trong mọi tình huống. Cách kiểm tra phù hợp vẫn phụ thuộc bài toán."
      },
      {
        "type": "question",
        "title": "Đọc tiếp ở đâu?",
        "text": "Nếu muốn hiểu tận gốc, hãy đi theo chuỗi Vectors → Loss → Gradient → Neural networks, rồi quay lại Transformer. Khi đó từ “training” sẽ không còn là một hộp đen."
      }
    ]
  },
  "transformer-era": {
    "intro": "Transformer mở ra một giai đoạn quan trọng, nhưng sản phẩm AI mà ta dùng hôm nay còn đến từ pretraining, post-training, dữ liệu, inference và cách thiết kế hệ thống.",
    "minutes": 14,
    "sections": [
      {
        "type": "text",
        "title": "Đừng gộp một thập kỷ thành một phát minh",
        "text": "Năm 2017, bài báo Attention Is All You Need giới thiệu Transformer cho sequence modeling. Sau đó các hướng sử dụng khác nhau xuất hiện: encoder-oriented như BERT, decoder-only autoregressive như nhiều họ GPT, và encoder–decoder cho bài toán sequence-to-sequence.\n\nQuy mô dữ liệu và compute mở rộng giúp pretraining có phạm vi năng lực rộng. Nhưng mô hình dự đoán token tiếp theo chưa mặc nhiên biết làm trợ lý. Instruction tuning và các phương pháp dựa trên human preference góp phần quan trọng khiến đầu ra phù hợp với yêu cầu hơn."
      },
      {
        "type": "compare",
        "title": "Những mảnh ghép không nên đánh đồng",
        "rows": [
          [
            "Transformer",
            "Họ kiến trúc mạng xử lý chuỗi, sử dụng attention và các tầng biến đổi biểu diễn."
          ],
          [
            "Pretraining",
            "Giai đoạn tối ưu objective trên dữ liệu lớn, tạo năng lực ngôn ngữ/kiến thức tổng quát."
          ],
          [
            "Post-training",
            "Các bước điều chỉnh hành vi như làm theo chỉ dẫn, từ chối không phù hợp và cải thiện tương tác."
          ],
          [
            "Agent system",
            "Bộ điều phối context, tools, execution, kiểm tra kết quả và chính sách truy cập."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Vì sao coding agents tiến xa?",
        "text": "Một model dù mạnh cũng không tự nhiên biết file nào trong repo cần sửa hoặc test nào đang fail. Agent runtime phải đưa repo context, quyền gọi công cụ, kết quả command, cách quản lý diff và giới hạn thao tác vào một vòng lặp. Một phần tiến bộ của sản phẩm đến từ model, phần còn lại đến từ orchestration.\n\nVì vậy, khi so sánh hai agent, cần phân biệt chất lượng model, công cụ được cấp, cách nạp context, benchmark và chính sách vận hành."
      },
      {
        "type": "question",
        "title": "Tập nối các lớp",
        "text": "Hãy giải thích bằng 3 mức: Transformer là gì? LLM học hành vi theo instruction từ đâu? Vì sao cần một hệ thống riêng để agent chạy test hoặc tạo pull request?"
      }
    ]
  }
});
