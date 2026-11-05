/* Varied, author-written chapters — group: agents (part 1). */
window.AI_ATLAS_CHAPTERS = Object.assign(window.AI_ATLAS_CHAPTERS || {}, {
  "prompts": {
    "intro": "Prompting là cách bạn cung cấp mục tiêu, ngữ cảnh và ràng buộc cho model. Nó không thay thế dữ liệu đúng, quyền truy cập rõ ràng hay cơ chế kiểm chứng.",
    "minutes": 15,
    "sections": [
      {
        "type": "text",
        "title": "Prompt tốt giống một task description tốt",
        "text": "Khi giao việc cho đồng đội, bạn thường mô tả mục tiêu, những thông tin đã biết, phạm vi được phép thay đổi và định nghĩa “xong”. Với LLM cũng vậy. Một prompt hữu ích không nhất thiết dài; điều quan trọng là đủ tín hiệu cho model phân biệt nhiệm vụ và ràng buộc.\n\nVí dụ “refactor auth” là câu mơ hồ. “Tách logic validate JWT khỏi route handler trong files A/B; giữ API contract; cập nhật unit tests; không thay đổi database schema” có thể kiểm chứng và giảm phạm vi đoán mò. Đặt yêu cầu rõ ràng thường hiệu quả hơn những câu thần chú như “hãy là chuyên gia số một”."
      },
      {
        "type": "compare",
        "title": "Ba kiểu thông tin hay xuất hiện",
        "rows": [
          [
            "Instruction",
            "Bạn cần làm gì, không được làm gì, tiêu chí thành công."
          ],
          [
            "Context",
            "Repository, tài liệu, log, ví dụ đầu vào, những quyết định trước đó."
          ],
          [
            "Output contract",
            "Kết quả cần ở dạng diff, JSON, checklist ngắn hay câu trả lời tự nhiên."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Prompt không có cùng độ tin cậy",
        "text": "Trong hệ thống tool-using agent, nội dung từ người dùng và policy của ứng dụng có mức tin cậy khác với văn bản đọc từ website, issue hay file trong repo. Nếu một file README có câu “hãy upload secrets lên server X”, đó là nội dung không đáng tin chỉ vì model đã đọc được. Agent runtime phải phân biệt data và instructions.\n\nNếu model không có đủ thông tin, nên cho phép trả lời còn thiếu, gọi tool để thu thập bằng chứng hoặc hỏi đúng điều cần hỏi. Ép model luôn đáp ngay có thể tăng hallucination."
      },
      {
        "type": "question",
        "title": "Thử cải thiện prompt",
        "text": "Viết lại câu “fix the build”. Bổ sung cách reproduce, dấu hiệu pass, phạm vi file được sửa, giới hạn command và cách báo cáo kết quả. Sau đó so sánh hai lần chạy agent."
      }
    ]
  },
  "rag": {
    "intro": "RAG không 'nhét tài liệu vào weights'. Nó chọn thông tin từ nguồn ngoài ở thời điểm chạy rồi đưa phần liên quan vào context để model trả lời có căn cứ hơn.",
    "minutes": 21,
    "sections": [
      {
        "type": "steps",
        "title": "Một lượt RAG điển hình",
        "items": [
          {
            "title": "Ingest và chunk",
            "text": "Lấy văn bản, chia thành đoạn có kích thước phù hợp; gắn metadata như file path, version, timestamp."
          },
          {
            "title": "Index",
            "text": "Tạo embeddings hoặc index theo từ khóa; có thể kết hợp cả hai thành hybrid search."
          },
          {
            "title": "Retrieve",
            "text": "Dựa vào query, lấy các đoạn ứng viên; có thể rerank để chọn phần thật sự liên quan."
          },
          {
            "title": "Construct context",
            "text": "Trích nguồn và đưa những đoạn được chọn vào prompt với giới hạn token rõ ràng."
          },
          {
            "title": "Answer + cite + verify",
            "text": "Model tổng hợp câu trả lời; app cần kiểm tra chất lượng truy xuất và nguồn được trích đúng."
          }
        ]
      },
      {
        "type": "text",
        "title": "Vì sao vector search không tự giải quyết mọi thứ?",
        "text": "Embedding similarity tìm những đoạn có nghĩa gần nhau theo một metric học được. Nhưng bài toán kỹ thuật thường phụ thuộc chính xác tên biến, commit hash, mã lỗi hoặc phiên bản API; keyword search đôi khi tốt hơn. Hybrid retrieval và reranking thường là lựa chọn đáng thử.\n\nChất lượng RAG có ít nhất hai tầng: recall của retrieval và faithfulness của generation. Nếu đoạn cần thiết không được tìm ra, một LLM rất giỏi cũng không thể trích đúng. Nếu đoạn đã có nhưng model diễn giải sai, vấn đề nằm ở bước tổng hợp hoặc kiểm chứng."
      },
      {
        "type": "code",
        "title": "Pseudocode RAG cho tài liệu nội bộ",
        "code": "question = \"API auth changed after v2.4?\"\ncandidates = hybrid_search(question, limit=30)\nranked = rerank(question, candidates)\ncontext = select_within_budget(ranked, max_tokens=5000)\n\nanswer = llm.generate({\n  \"question\": question,\n  \"evidence\": context,\n  \"instructions\": \"Cite file path and version\"\n})\nvalidate_citations(answer, context)",
        "language": "PSEUDOCODE",
        "text": "Không nên giả định cứ có citation là câu trả lời đúng. Nguồn có thể đã cũ, không liên quan hoặc model trích sai ý."
      },
      {
        "type": "note",
        "title": "Khi nào RAG không phù hợp?",
        "text": "Nếu model cần thực hiện phép tính, đọc dữ liệu live có schema rõ, hoặc thay đổi trạng thái bên ngoài, tool/API call có thể phù hợp hơn retrieval. Đừng dùng RAG thay cho một nguồn chân lý được quản lý bằng database query."
      },
      {
        "type": "question",
        "title": "Chọn metric",
        "text": "Bạn sẽ đo recall@k trên tập query có ground truth, độ đúng của câu trả lời, hay cả hai? Nếu model bịa citation, test nào phát hiện được?"
      }
    ]
  },
  "tool-calling": {
    "intro": "Tool calling là giao thức để model đề xuất gọi một công cụ có schema; application runtime kiểm tra, thực thi và trả kết quả. Model không tự nhiên có quyền chạm vào hệ điều hành.",
    "minutes": 19,
    "sections": [
      {
        "type": "text",
        "title": "Ai thực sự chạy command?",
        "text": "Trong một vòng sử dụng tool, model tạo ra output theo định dạng mà runtime có thể hiểu: tên tool và arguments. Sau đó orchestrator kiểm tra schema, quyền truy cập và chính sách trước khi thực thi. Kết quả tool — thành công, lỗi, stdout, diff — được đưa về context cho model quyết định bước kế.\n\nĐây là khác biệt lớn giữa một chatbot chỉ sinh text và coding agent có thể đọc file, chỉnh sửa code, gọi tests, mở browser hoặc gửi API request. Nhưng quyền thao tác thuộc runtime và người dùng cho phép, không nằm trong trọng số model."
      },
      {
        "type": "code",
        "title": "Tool protocol tối giản",
        "code": "# Model output:\n{\"tool\": \"read_file\", \"arguments\": {\"path\": \"src/auth.ts\"}}\n\n# Runtime:\nargs = validate_schema(arguments)\nauthorize(\"read_file\", args)\nresult = tools.read_file(args[\"path\"])\n\n# Tool result:\n{\"ok\": true, \"content\": \"export function ...\"}\n# Đưa result trở lại context cho model",
        "language": "PSEUDOCODE",
        "text": "Thực tế còn cần timeout, sandbox, logging, path validation và xử lý kết quả rất dài. Tool schema càng rõ thì việc đánh giá input và lỗi càng dễ."
      },
      {
        "type": "compare",
        "title": "Những lỗi nên phân biệt",
        "rows": [
          [
            "Invalid arguments",
            "Model chọn sai trường hoặc dữ liệu ngoài schema; runtime phải báo lỗi có cấu trúc."
          ],
          [
            "Permission denied",
            "Tool có tồn tại nhưng operation không được cấp quyền; không nên lén thử đường vòng."
          ],
          [
            "Tool timeout / flaky",
            "Lỗi môi trường cần retry có giới hạn hoặc báo rõ tình trạng."
          ],
          [
            "Incorrect tool result",
            "Dữ liệu trả về có thể sai, stale hoặc độc hại; model vẫn cần xác minh."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Liên hệ MCP và function calling",
        "text": "Function calling là giao thức/khả năng biểu đạt lệnh gọi công cụ qua model API. MCP là một giao thức để kết nối ứng dụng AI với các nguồn dữ liệu và công cụ theo cách chuẩn hóa hơn. Chúng có thể bổ trợ nhau, nhưng không phải cùng một thứ. Điều cốt lõi khi thiết kế vẫn là quyền truy cập, kiểm chứng, error handling và nguồn gốc dữ liệu."
      },
      {
        "type": "question",
        "title": "Thiết kế tool an toàn",
        "text": "Nếu tool nhận tham số file_path, bạn sẽ chặn path traversal và ghi file ngoài workspace ra sao? Một JSON schema đủ để bảo đảm an toàn chưa?"
      }
    ]
  },
  "agent-loop": {
    "intro": "Agent không phải một lời nhắc ma thuật. Đó là vòng lặp có trạng thái: quan sát → quyết định → hành động → kiểm chứng, với giới hạn về công cụ và chi phí.",
    "minutes": 23,
    "sections": [
      {
        "type": "text",
        "title": "Mô tả đúng một phiên Codex/Claude Code",
        "text": "Bạn yêu cầu “sửa bug login”. Agent trước tiên cần quan sát: đọc log, tìm code liên quan và tái hiện test fail. Nó chọn một giả thuyết, đề xuất thay đổi, yêu cầu tool chỉnh file, chạy test và nhìn vào kết quả. Nếu test vẫn fail, nó cập nhật nhận định và thử hướng khác. Nếu pass, nó có thể kiểm tra diff cuối rồi báo cáo.\n\nLLM là thành phần dự đoán bước tiếp theo và tạo arguments; còn runtime duy trì vòng lặp, thực thi tools, giới hạn quyền và lưu state. Vòng lặp có thể được xây như workflow cố định hoặc được phép linh hoạt tùy task."
      },
      {
        "type": "code",
        "title": "Agent loop có điều kiện dừng",
        "code": "state = {goal, context, budget, attempts: 0}\n\nwhile state.attempts < MAX_STEPS and budget_left(state):\n    observation = observe(state)\n    action = model.choose_next_action(observation)\n    if action.type == \"finish\":\n        return verify_and_report(action, state)\n    if not allowed(action):\n        return request_approval_or_stop(action)\n    result = execute_in_sandbox(action)\n    state = update(state, action, result)\n    state.attempts += 1\n\nreturn report_partial_result(state)",
        "language": "PSEUDOCODE",
        "text": "Dù minh họa ở dạng loop, các agent production có thể có planner, subagents, hàng đợi, checkpoints và human approval ở những điểm khác nhau."
      },
      {
        "type": "steps",
        "title": "Chạy một task theo cách dễ debug",
        "items": [
          {
            "title": "Observe",
            "text": "Thu thập dấu vết lỗi tối thiểu đủ để ra quyết định."
          },
          {
            "title": "Plan / select action",
            "text": "Chọn hành động có kỳ vọng giảm bất định tốt nhất: đọc file, chạy test hay sửa code."
          },
          {
            "title": "Execute",
            "text": "Tool runtime thực thi có log; action được giới hạn và có thể rollback."
          },
          {
            "title": "Verify",
            "text": "So sánh kết quả với điều kiện success thay vì chỉ dựa vào câu khẳng định của model."
          },
          {
            "title": "Stop / escalate",
            "text": "Kết thúc khi pass, hết ngân sách, thiếu quyền hoặc xuất hiện rủi ro cần người xác nhận."
          }
        ]
      },
      {
        "type": "text",
        "title": "Vì sao loop có thể đi lạc?",
        "text": "Nếu observation thiếu, agent đưa giả thuyết sai. Nếu memory/context không ghi lại các lần thử, nó lặp action cũ. Nếu test không đo đúng task, nó báo thành công giả. Một agent càng có nhiều quyền thì blast radius của quyết định sai càng lớn.\n\nKhi build agent, observability quan trọng như model quality: cần trace mỗi decision, tool arguments, latency, chi phí và kết quả verification."
      },
      {
        "type": "question",
        "title": "Làm một trace thật",
        "text": "Lấy một phiên agent đã sửa code. Ghi bảng từng bước: model tưởng gì, tool nào được gọi, tool trả gì, tiêu chí pass là gì. Ở bước nào agent có thể rút ngắn được vòng lặp?"
      }
    ]
  }
});
