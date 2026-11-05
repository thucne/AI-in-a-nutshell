/* Varied, author-written chapters — group: frontier. */
window.AI_ATLAS_CHAPTERS = Object.assign(window.AI_ATLAS_CHAPTERS || {}, {
  "multimodal": {
    "intro": "Multimodal model mở rộng input/output khỏi text để xử lý hình ảnh, âm thanh và đôi khi video. Không phải mọi model đều có cùng cách mã hóa và trộn các modality.",
    "minutes": 15,
    "sections": [
      {
        "type": "text",
        "title": "Từ ảnh sang biểu diễn chung",
        "text": "Một hệ thống nhận ảnh có thể dùng vision encoder chuyển ảnh thành các patches hoặc vectors. Những vectors này được nối hoặc tích hợp với text tokens qua một cơ chế projection, cross-attention hoặc kiến trúc khác. Với âm thanh, hệ thống có thể dùng encoder âm học, decoder speech hoặc mô hình end-to-end. Cụ thể mỗi sản phẩm có những trade-off riêng.\n\nĐiểm quan trọng không phải là “model có mắt”, mà là dữ liệu ngoài text đã được chuyển thành tín hiệu số, có học các quan hệ với ngôn ngữ hoặc hành động. Những điểm yếu như đọc chữ rất nhỏ, mô tả ảnh cắt mất chi tiết hay nhầm thứ tự các frame vẫn có thể xuất hiện."
      },
      {
        "type": "compare",
        "title": "Các nhiệm vụ khác nhau",
        "rows": [
          [
            "Image understanding",
            "Trả lời câu hỏi về ảnh, nhận dạng thành phần hoặc trích thông tin từ biểu đồ."
          ],
          [
            "Speech",
            "Nhận dạng lời nói, tổng hợp tiếng nói hoặc tương tác hai chiều."
          ],
          [
            "Video",
            "Xử lý frame theo thời gian, cần quan tâm sampling, thời gian và khả năng theo dõi sự kiện."
          ],
          [
            "Action / robotics",
            "Ánh xạ quan sát thành lệnh điều khiển trong môi trường vật lý — đòi hỏi kiểm chứng an toàn."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Ứng dụng thực tế cho developer",
        "text": "Một agent đọc screenshot để debug UI là bài toán multimodal. Nhưng screenshot không luôn chứa cấu trúc DOM, API requests, state machine hay network logs. Để sửa bug đáng tin, nó thường cần kết hợp ảnh với browser tools, code repository và test.\n\nTrong những môi trường cần nhận biết tuyệt đối chính xác, hãy kết hợp sensor data có cấu trúc và phép xác minh ngoài model."
      },
      {
        "type": "question",
        "title": "Một bài tập thiết kế",
        "text": "Nếu agent chỉ có screenshot trang web, bug nào nó có thể phát hiện? Bug nào đòi hỏi phải xem DOM, console hoặc request log?"
      }
    ]
  },
  "moe": {
    "intro": "Mixture of Experts (MoE) là cách phân chia năng lực tính toán trong một network: một router chọn một phần những expert modules để xử lý mỗi token.",
    "minutes": 18,
    "sections": [
      {
        "type": "text",
        "title": "Nhiều tham số không đồng nghĩa tất cả cùng chạy",
        "text": "Trong một Transformer dense, mọi token thường đi qua cùng các khối MLP ở mỗi tầng. Với MoE, một số tầng thay MLP đơn bằng nhiều experts. Router tính điểm và chọn một hoặc vài experts để nhận token. Nhờ vậy tổng số tham số có thể lớn trong khi số tham số được kích hoạt mỗi token nhỏ hơn.\n\nTuy nhiên, việc routing, communication giữa thiết bị và cân bằng tải trở nên khó hơn. Một expert bị quá tải có thể tạo bottleneck; token-to-expert routing cũng cần cơ chế ổn định khi training."
      },
      {
        "type": "code",
        "title": "MoE layer rút gọn",
        "code": "scores = router(hidden_state)\nexperts = select_top_k(scores, k=2)\n\noutput = 0\nfor expert, weight in experts:\n    output += weight * expert_MLP(hidden_state)\n\nreturn output",
        "language": "PSEUDOCODE",
        "text": "Đây chỉ là mental model. Thực tế thường có normalization, dispatch token theo batch, capacity constraints và auxiliary losses."
      },
      {
        "type": "compare",
        "title": "Hiểu đúng về chi phí",
        "rows": [
          [
            "Total parameters",
            "Số weights của toàn bộ mô hình, gồm cả experts không được gọi trong từng token."
          ],
          [
            "Active parameters",
            "Subset được dùng cho một token hoặc lượt forward, tùy kiến trúc."
          ],
          [
            "Memory khi serving",
            "Có thể vẫn phải giữ nhiều experts trong memory hoặc chuyển chúng giữa thiết bị."
          ],
          [
            "Communication cost",
            "Dispatch tokens theo experts, nhất là khi experts nằm ở nhiều GPU."
          ]
        ]
      },
      {
        "type": "text",
        "title": "MoE không tự giải quyết mọi vấn đề",
        "text": "Router có thể chọn chuyên gia theo những pattern model học được, nhưng không nên tưởng tượng mỗi expert là một người có chuyên môn rõ ràng như “expert toán” hoặc “expert Python”. Một số chuyên môn hóa có thể quan sát được, song không nhất thiết khớp cách đặt tên của con người.\n\nHiệu quả thực tế phụ thuộc architecture, load balancing, phần cứng và workload. Vì vậy số tham số MoE lớn không thể so trực tiếp với tham số dense theo cách đơn giản."
      },
      {
        "type": "question",
        "title": "Tư duy serving",
        "text": "MoE có ít active parameters hơn dense nhưng vì sao hệ thống vẫn có thể tốn VRAM và băng thông liên GPU?"
      }
    ]
  },
  "open-questions": {
    "intro": "Học AI không chỉ là biết model làm được gì. Những câu hỏi chưa giải quyết — độ đúng, khả năng tổng quát, interpretability và an toàn — mới là nơi bạn biết cách đánh giá một sản phẩm nghiêm túc.",
    "minutes": 15,
    "sections": [
      {
        "type": "text",
        "title": "Vì sao các benchmark chưa kể đủ câu chuyện?",
        "text": "Một mô hình có thể đạt điểm cao trên benchmark public nhưng thất bại khi gặp dữ liệu doanh nghiệp, ngôn ngữ ít phổ biến hoặc task dài nhiều bước. Benchmark cũng có nguy cơ leakage, overfitting vào format và lỗi đo. Với agent, ngoài model còn có tool runtime, sandbox, retrieval và cách hệ thống kiểm chứng.\n\nĐộ tin cậy phải được đo trên workload cụ thể. “Tỉ lệ thành công” cần định nghĩa rõ: pass ở lần đầu, sau mấy lần retry, với ngân sách bao nhiêu, có ảnh hưởng dữ liệu ngoài không?"
      },
      {
        "type": "compare",
        "title": "Những hướng nghiên cứu quan trọng",
        "rows": [
          [
            "Factuality & calibration",
            "Làm sao model biết khi nào thiếu bằng chứng và biểu diễn mức bất định phù hợp?"
          ],
          [
            "Generalization & robustness",
            "Liệu năng lực có giữ được khi domain, cấu trúc input hoặc điều kiện tác vụ thay đổi?"
          ],
          [
            "Interpretability",
            "Làm sao hiểu các biểu diễn và phép tính bên trong model một cách có cơ sở?"
          ],
          [
            "Safety & governance",
            "Phân quyền agent, bảo vệ dữ liệu, phân phối lợi ích/rủi ro và kiểm soát tác động."
          ],
          [
            "Efficiency",
            "Giảm compute, memory, latency và chi phí năng lượng mà vẫn giữ chất lượng."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Một cách nhìn thực tế",
        "text": "Thay vì hỏi “AGI đã đến chưa?”, hãy hỏi “trên tập task nào, theo thước đo nào, với những giới hạn nào?”. Sự minh bạch về điều chưa chắc chắn giúp chọn công cụ tốt hơn và xây sản phẩm bền hơn.\n\nĐối với developer, điều này cũng có nghĩa kỹ năng về testing, observability, security và distributed systems ngày càng quan trọng. Model càng có khả năng, ta càng cần hệ thống kiểm soát tốt."
      },
      {
        "type": "question",
        "title": "Viết checklist của bạn",
        "text": "Trước khi cho agent sửa production config, bạn cần những điều kiện nào được thỏa mãn? Liệt kê nguồn dữ liệu, quyền, nơi thực thi, cách kiểm chứng và phương án rollback."
      }
    ]
  }
});
