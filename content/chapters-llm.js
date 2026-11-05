/* Varied, author-written chapters — group: llm. */
window.AI_ATLAS_CHAPTERS = Object.assign(window.AI_ATLAS_CHAPTERS || {}, {
  "tokenization": {
    "intro": "Một LLM không nhìn trực tiếp chữ cái hay từ như ta. Nó nhận dãy token IDs và tạo biểu diễn số cho từng token. Vì thế ranh giới token ảnh hưởng cả chi phí lẫn hành vi.",
    "minutes": 16,
    "sections": [
      {
        "type": "text",
        "title": "Tại sao không dùng luôn 'mỗi từ một ID'?",
        "text": "Ngôn ngữ tự nhiên có số từ gần như vô hạn: tên riêng, typo, từ ghép, mã nguồn, số và các hệ chữ khác nhau. Nếu mỗi từ cần một entry riêng, vocabulary sẽ lớn và vẫn gặp vô số từ chưa biết. Tokenizer subword như BPE hoặc Unigram giải quyết phần nào bằng cách chia văn bản thành những mảnh phổ biến.\n\n“Token” không đồng nghĩa với “từ”. Một từ ngắn có thể là một token; một tên thư viện, path hoặc chuỗi tiếng Việt có thể tách thành nhiều token. Cách tách phụ thuộc vocabulary và thuật toán tokenizer của từng model."
      },
      {
        "type": "steps",
        "title": "Một lượt xử lý văn bản",
        "items": [
          {
            "title": "Normalize hoặc tiền xử lý",
            "text": "Một số tokenizer áp dụng bước xử lý byte, khoảng trắng hay Unicode theo quy tắc riêng."
          },
          {
            "title": "Segment thành các mảnh token",
            "text": "Chia chuỗi bằng vocabulary và thuật toán tokenizer đã học/thiết kế."
          },
          {
            "title": "Chuyển thành IDs",
            "text": "Tra vocabulary để nhận dãy số nguyên, có thể kèm special tokens."
          },
          {
            "title": "Đưa vào embedding layer",
            "text": "Mỗi ID dùng để lấy vector biểu diễn ban đầu trước khi qua các tầng Transformer."
          }
        ]
      },
      {
        "type": "code",
        "title": "Ví dụ minh họa, không phải output từ tokenizer cụ thể",
        "code": "input = \"fix_user_auth()\"\n# Có thể tách theo nhiều cách tùy tokenizer:\ntokens_A = [\"fix\", \"_user\", \"_auth\", \"()\"]\ntokens_B = [\"fix\", \"_\", \"user\", \"_\", \"auth\", \"(\", \")\"]\n# Token IDs là các số, không mang nghĩa cố định giữa các model.",
        "language": "PSEUDOCODE",
        "text": "Đừng dùng ví dụ này để dự đoán chính xác token count. Khi tối ưu context/cost, nên đo bằng tokenizer thật của model đang sử dụng."
      },
      {
        "type": "text",
        "title": "Liên hệ với coding agent",
        "text": "Một stack trace dài, lockfile, JSON lặp, tên biến rất dài hoặc ký tự lạ có thể tiêu tốn nhiều token hơn bạn nghĩ. Vì vậy, thu gọn log theo phần liên quan thường hiệu quả hơn chỉ đếm số dòng. Nhưng nén context quá mức lại làm mất bằng chứng model cần để sửa bug."
      },
      {
        "type": "question",
        "title": "Thử nghiệm",
        "text": "Với cùng một model, hãy đo token count của một đoạn tiếng Việt, một đoạn tiếng Anh và một stack trace có nhiều đường dẫn. Vì sao khác nhau dù số ký tự tương đương?"
      }
    ]
  },
  "embedding": {
    "intro": "Embedding là cầu nối giữa token IDs rời rạc và phép tính liên tục. Model học vector biểu diễn cho token rồi dần biến đổi chúng dựa trên ngữ cảnh.",
    "minutes": 14,
    "sections": [
      {
        "type": "text",
        "title": "Tra bảng thôi đã đủ chưa?",
        "text": "Embedding layer có thể hình dung như ma trận E với kích thước vocabulary_size × hidden_size. Token ID dùng để lấy một hàng trong E. Khác với one-hot encoding rất thưa, vector này có số chiều cố định và được cập nhật trong training.\n\nNhưng vector ban đầu không phải toàn bộ ý nghĩa cuối cùng. Trong transformer, hidden state của cùng một token sẽ thay đổi theo những token xung quanh qua các tầng. Từ “bank” trong “river bank” và “bank account” có thể khởi đầu từ một embedding, nhưng biểu diễn theo ngữ cảnh có thể khác xa nhau."
      },
      {
        "type": "code",
        "title": "Tra embedding theo shape",
        "code": "vocab_size = 50000\nhidden_size = 768\nE = parameters(shape=[vocab_size, hidden_size])\n\nids = [12, 450, 87]          # [seq_len=3]\nx = E[ids]                   # [3, 768]\nx = add_position_information(x)\n# Chuyển qua transformer blocks...",
        "language": "PSEUDOCODE",
        "text": "Thông số chỉ là minh họa. Một mô hình production có thể có kích thước, tokenizer và vị trí encoding khác."
      },
      {
        "type": "compare",
        "title": "Hai khái niệm dễ lẫn",
        "rows": [
          [
            "Token embedding",
            "Vector đầu vào của một token ID, được học cùng model."
          ],
          [
            "Contextual representation",
            "Hidden state sau các tầng neural, có tính đến các token khác trong context."
          ],
          [
            "Sentence embedding",
            "Vector đại diện cả đoạn văn, thường được tạo bởi model/pooling chuyên cho similarity, retrieval hoặc classification."
          ]
        ]
      },
      {
        "type": "question",
        "title": "Đối chiếu RAG",
        "text": "Vì sao vector dùng để retrieval một đoạn tài liệu không nhất thiết giống hidden state của LLM tại một vị trí token? Cần kiểm tra mô hình embedding được train cho mục tiêu gì."
      }
    ]
  },
  "positional": {
    "intro": "Attention tự nó không biết thứ tự các token. Ta cần đưa thông tin về vị trí hoặc quan hệ vị trí vào phép tính, nếu không model khó phân biệt hai chuỗi chỉ khác trật tự.",
    "minutes": 13,
    "sections": [
      {
        "type": "text",
        "title": "Không có vị trí thì chuyện gì xảy ra?",
        "text": "Giả sử chỉ có token embeddings và một self-attention không thêm thông tin vị trí. Khi hoán đổi các token đầu vào, phép attention về cơ bản cũng hoán đổi các hidden states tương ứng; nó không có một cơ chế riêng để hiểu “từ A đứng trước từ B”. Nhưng thứ tự rất quan trọng trong mã nguồn và ngôn ngữ: “dog bites man” khác “man bites dog”.\n\nCó nhiều cách đưa vị trí vào mô hình: learned absolute position embeddings, sinusoidal positional encodings hoặc các phương pháp relative/rotary position. Không có một phương pháp duy nhất áp dụng cho mọi LLM."
      },
      {
        "type": "compare",
        "title": "Ba hướng tiếp cận",
        "rows": [
          [
            "Absolute position",
            "Cộng hoặc gắn vector biểu diễn vị trí 0,1,2... vào input."
          ],
          [
            "Relative position",
            "Cho phép attention xét trực tiếp mối quan hệ khoảng cách giữa token i và j."
          ],
          [
            "RoPE",
            "Áp dụng phép quay lên Q/K theo vị trí để dot product thể hiện thông tin vị trí tương đối. Nhiều biến thể và chiến lược mở rộng context dựa trên nền này."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Tại sao context dài lại khó?",
        "text": "Việc hỗ trợ nhiều token hơn không chỉ là thay con số max length. Model phải học hoặc được điều chỉnh để xử lý khoảng cách vị trí, attention patterns và các nhiệm vụ cần truy xuất thông tin ở xa. Một model chấp nhận 100k token không có nghĩa luôn sử dụng chi tiết ở mọi vị trí tốt như nhau.\n\nKhi xây agent, bạn vẫn cần nạp các phần code có liên quan và tóm lược context hợp lý, thay vì mặc định nhét cả repository vào prompt."
      },
      {
        "type": "question",
        "title": "Thử đổi thứ tự",
        "text": "Hãy hoán vị các token của một biểu thức như “Alice gives Bob a book” và “Bob gives Alice a book”. Nếu không có positional signal, model sẽ thiếu loại thông tin nào để phân biệt vai trò?"
      }
    ]
  },
  "attention": {
    "intro": "Self-attention cho mỗi vị trí cách chọn và tổng hợp thông tin từ các vị trí khác trong context. Q, K, V là các phép chiếu tuyến tính được học, không phải ba kho dữ liệu riêng biệt.",
    "minutes": 24,
    "sections": [
      {
        "type": "text",
        "title": "Một hình dung từ code review",
        "text": "Giả sử bạn đang sửa một function dùng biến currentUser được khai báo ở xa. Khi đọc dòng đang lỗi, bạn cần quay lại vị trí định nghĩa, tham số đầu vào và điều kiện kiểm tra quyền. Attention có nét tương tự: biểu diễn tại vị trí hiện tại có thể kết hợp có trọng số thông tin từ các vị trí khác.\n\nMỗi token có một hidden state. Từ đó, model tính Q (query), K (key), V (value) bằng các ma trận học được. Q của token đang xem được so với K các token được phép nhìn để tính điểm liên quan; softmax chuyển điểm thành trọng số; sau đó tạo tổng có trọng số của V."
      },
      {
        "type": "code",
        "title": "Scaled dot-product attention",
        "code": "Q = X @ Wq\nK = X @ Wk\nV = X @ Wv\n\nscores  = (Q @ K.T) / sqrt(d_k)\nscores += causal_mask   # -infinity ở vị trí tương lai\nweights = softmax(scores, axis=-1)\noutput  = weights @ V",
        "language": "PSEUDOCODE",
        "text": "Nếu X có shape [n, d_model], Q và K có shape [n, d_k], V là [n, d_v]. Ma trận weights có shape [n, n] cho một head. Với nhiều heads, cùng thao tác diễn ra trên các không gian con khác nhau."
      },
      {
        "type": "steps",
        "title": "Đọc một row attention",
        "items": [
          {
            "title": "Lấy Query của vị trí i",
            "text": "Đó là biểu diễn câu hỏi ‘vị trí này đang cần thông tin gì?’ trong không gian học được."
          },
          {
            "title": "So với mọi Key được phép",
            "text": "Dot product cho mức hợp nhau; trong causal model các vị trí tương lai bị mask."
          },
          {
            "title": "Chuẩn hóa score",
            "text": "Softmax tạo trọng số có tổng bằng 1 theo các vị trí mà token có thể nhìn."
          },
          {
            "title": "Cộng có trọng số các Value",
            "text": "Thông tin được chuyển vào output của vị trí i; sau đó các lớp khác tiếp tục biến đổi."
          }
        ]
      },
      {
        "type": "text",
        "title": "Multi-head không chỉ là tính trung bình nhiều lần",
        "text": "Một attention head có thể học cách ưu tiên những loại quan hệ riêng, trong khi các heads còn lại học những pattern khác. Output các heads được ghép và chiếu trở lại không gian hidden. Nhưng đừng suy rằng một head luôn có nhãn ngữ nghĩa cố định như “head tìm chủ ngữ”; phân tích thực nghiệm phức tạp hơn nhiều.\n\nCũng không nên diễn giải attention weights như bằng chứng đầy đủ cho việc mô hình “nghĩ gì”. Đây là một phép tính bên trong mạng, không phải một bản giải thích nhân quả trọn vẹn."
      },
      {
        "type": "note",
        "title": "Chi phí tính toán và giới hạn",
        "text": "Trong full attention, ma trận scores có n × n phần tử, nên chi phí tương tác theo độ dài chuỗi thường tăng xấp xỉ bậc hai. Các kỹ thuật tối ưu kernel, sparse/sliding attention và cache cải thiện hiệu quả ở các bối cảnh cụ thể, nhưng không xóa mọi chi phí."
      },
      {
        "type": "question",
        "title": "Kiểm tra causal mask",
        "text": "Ở vị trí token thứ 4 của decoder-only model, vì sao không được tính attention tới token thứ 10 trong lúc sinh autoregressive? Nếu cho phép nhìn token tương lai trong training, model có thể gian lận bằng cách nào?"
      }
    ]
  },
  "transformer": {
    "intro": "Transformer không phải chỉ một khối attention. Nó là kiến trúc xếp chồng attention, feed-forward network, residual connections và normalization để học biểu diễn chuỗi.",
    "minutes": 25,
    "sections": [
      {
        "type": "text",
        "title": "Nhìn cấu trúc một decoder block",
        "text": "Trong nhiều LLM hiện đại, mỗi token đi qua nhiều tầng decoder Transformer. Một block thường có attention để kết hợp thông tin giữa các vị trí, một MLP để biến đổi riêng biểu diễn theo từng vị trí, các kết nối residual để giữ tín hiệu và normalization để hỗ trợ training ổn định. Thứ tự và chi tiết cụ thể có thể khác nhau giữa model.\n\nKhái niệm quan trọng: attention trộn thông tin *giữa* các token, còn feed-forward trộn đặc trưng *bên trong* vector của từng vị trí. Cả hai cùng cần thiết để một model học các quan hệ phức tạp."
      },
      {
        "type": "code",
        "title": "Mental model của một Transformer decoder",
        "code": "x = token_embedding(token_ids)\nx = position_aware_representation(x)\n\nfor block in transformer_blocks:\n    x = x + block.self_attention(block.norm1(x), causal=True)\n    x = x + block.mlp(block.norm2(x))\n\nlogits = output_projection(final_norm(x))\nnext_token = decode(logits[-1])",
        "language": "PSEUDOCODE",
        "text": "Pseudocode kiểu pre-norm. Những biến thể như post-norm, grouped-query attention, MoE hoặc rotary positions sẽ thay đổi chi tiết; biểu thức này chỉ cho khung tư duy."
      },
      {
        "type": "compare",
        "title": "Các tên dễ gây nhầm",
        "rows": [
          [
            "Encoder-only",
            "Phù hợp với việc tạo biểu diễn cho input, ví dụ một số mô hình kiểu BERT."
          ],
          [
            "Decoder-only",
            "Sinh token tự hồi quy theo context đã có; phổ biến trong họ LLM chat/code."
          ],
          [
            "Encoder–decoder",
            "Một network đọc input, network kia sinh output, thường dùng trong sequence-to-sequence."
          ],
          [
            "Transformer block",
            "Một tầng cấu trúc trong model; không đồng nghĩa với cả hệ thống AI agent."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Một token đi từ prompt tới output",
        "text": "Văn bản được tokenizer tách thành IDs. Các IDs biến thành vectors, đi qua nhiều Transformer blocks. Hidden state ở vị trí cuối được chiếu thành logits cho vocabulary. Decoding chọn token tiếp theo, thêm token đó vào context và chạy bước tiếp theo (thường tái sử dụng KV cache). Toàn bộ quy trình lặp lại cho tới điều kiện dừng.\n\nĐiều này giải thích vì sao output có thể được stream: hệ thống không cần chờ tạo xong toàn bộ câu trả lời mới trả token đầu tiên."
      },
      {
        "type": "note",
        "title": "Đừng coi đây là sơ đồ mọi model",
        "text": "Nhiều hệ thống có modality khác, routing chuyên gia, cách tối ưu inference riêng hoặc kiến trúc hybrid. Khi đọc paper/model card, hãy kiểm tra đúng biến thể thay vì áp sơ đồ một cách máy móc."
      },
      {
        "type": "question",
        "title": "Tự diễn giải bằng lời của bạn",
        "text": "Tại sao không chỉ dùng attention mà bỏ MLP? Và vì sao một Transformer decoder cần causal masking để học nhiệm vụ sinh token kế tiếp?"
      }
    ]
  },
  "causal-lm": {
    "intro": "Decoder-only LLM thường học dự đoán token kế tiếp dựa trên các token trước. Một objective đơn giản lại tạo ra rất nhiều khả năng khi được scale.",
    "minutes": 18,
    "sections": [
      {
        "type": "text",
        "title": "Objective thực sự đang làm gì?",
        "text": "Cho một chuỗi token x1, x2, ..., xn, model học p(x_t | x_1, ..., x_{t-1}) cho mỗi vị trí t. Ta có thể tính loss trên nhiều vị trí của cùng chuỗi song song trong training, nhờ causal mask ngăn vị trí trước nhìn tương lai.\n\nKhi inference, model chỉ biết prefix đã có. Nó dự đoán phân phối cho vị trí kế tiếp, chọn một token, nối token ấy vào prefix và lặp. Vì vậy dù transformer xử lý nhiều vị trí song song khi train, việc sinh một chuỗi mới thường có tính tuần tự giữa các bước."
      },
      {
        "type": "code",
        "title": "Factorization của chuỗi",
        "code": "P(x_1, x_2, ..., x_n)\n  = P(x_1) * P(x_2 | x_1) * ... *\n    P(x_n | x_1, ..., x_{n-1})\n\ntrain_loss = mean_t(-log P(target_token_t | prefix_t))\n\ngenerate:\n    while not done:\n        logits = model(prefix)\n        next_token = sample_or_argmax(logits)\n        prefix.append(next_token)",
        "language": "PSEUDOCODE",
        "text": "Sơ đồ toán này giúp hiểu generation. Thực tế còn có batching, KV cache, EOS/stop sequences và nhiều phương án decoding khác."
      },
      {
        "type": "text",
        "title": "Vì sao có vẻ như model trả lời câu hỏi?",
        "text": "Trong dữ liệu ngôn ngữ có vô số mẫu giải thích, hỏi đáp, code, lập luận, tài liệu và tương tác. Để dự đoán tốt, model có động lực học các regularities về cấu trúc, kiến thức và quan hệ. Sau pretraining, các giai đoạn instruction tuning/optimization thường giúp model phản hồi yêu cầu theo dạng trợ lý hơn.\n\nTuy nhiên, “dự đoán token” không tương đương với máy tra sự thật. Output phụ thuộc training, prompt, context, sampling và những gì môi trường cho model truy cập."
      },
      {
        "type": "question",
        "title": "Hiểu vì sao output có lỗi dây chuyền",
        "text": "Nếu model sinh sai tên file ở token thứ 30, những token sau được điều kiện hóa lên điều gì? Vì sao lỗi ban đầu có thể khiến một lời giải thích vẫn trông rất mạch lạc nhưng đi sai hướng?"
      }
    ]
  },
  "sampling": {
    "intro": "Model tạo logits; decoding policy quyết định token nào thật sự được chọn. Vì vậy cùng một model và prompt vẫn có thể cho nhiều kiểu đầu ra.",
    "minutes": 16,
    "sections": [
      {
        "type": "compare",
        "title": "Bốn chiến lược thường gặp",
        "rows": [
          [
            "Greedy decoding",
            "Luôn lấy token có score cao nhất ở bước hiện tại; dễ tái lập nhưng có thể mắc kẹt ở lựa chọn cục bộ."
          ],
          [
            "Temperature sampling",
            "Điều chỉnh độ sắc của phân phối trước khi sampling; không làm model học thêm kiến thức."
          ],
          [
            "Top-k",
            "Giới hạn ứng viên vào k token có score cao nhất rồi chuẩn hóa lại."
          ],
          [
            "Top-p / nucleus",
            "Lấy tập token nhỏ nhất có tổng xác suất đạt ngưỡng p, sau đó sampling trong tập đó."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Tính xác suất trước, rồi mới chọn",
        "text": "Ở mỗi bước, hidden state cuối được biến thành logits. Khi áp temperature, top-k hoặc top-p, ta đang can thiệp vào cách lấy mẫu từ phân phối. Không có setting nào biến một mô hình không biết kiến thức thành mô hình biết kiến thức.\n\nTemperature thấp thường tạo output nhất quán hơn, nhưng không bảo đảm deterministic tuyệt đối trong mọi hạ tầng. Temperature cao tạo nhiều biến thể hơn nhưng có thể tăng lỗi hoặc lan man. Với code generation, trade-off thường khác sáng tác văn bản."
      },
      {
        "type": "code",
        "title": "Pseudocode của top-p",
        "code": "probs = softmax(logits / T)\ncandidates = sort_descending(probs)\nkeep = smallest_prefix_with_sum_at_least(p)\nnormalized = renormalize(keep)\nnext_token = sample(normalized)",
        "language": "PSEUDOCODE",
        "text": "Một số engine áp dụng các filter và penalty theo thứ tự riêng. Để so sánh kết quả, hãy giữ cố định model version, prompt, seed nếu được hỗ trợ và các tham số decoding khác."
      },
      {
        "type": "question",
        "title": "Thử trên playground",
        "text": "Đặt temperature 0.2 rồi 2.0 trong mô phỏng. Điều gì thay đổi ở xác suất token đầu tiên? Liệu tăng temperature có làm câu trả lời “thông minh hơn” không?"
      }
    ]
  },
  "context-window": {
    "intro": "Context window là giới hạn lượng token mà mô hình có thể xử lý trong một lượt. Nhưng 'đưa được vào' và 'dùng hiệu quả' là hai chuyện khác nhau.",
    "minutes": 16,
    "sections": [
      {
        "type": "text",
        "title": "Context không phải bộ nhớ dài hạn",
        "text": "Khi gọi một LLM, model nhận một chuỗi context cụ thể gồm system/developer instructions, lịch sử chat, tool results, tài liệu được truy xuất và nội dung yêu cầu mới. Những gì không nằm trong context (hoặc các cơ chế truy cập ngoài context) sẽ không tự nhiên được model biết trong lượt đó.\n\nContext window thường là giới hạn token của mô hình/hệ thống; nó không đảm bảo model sẽ truy xuất mọi chi tiết đều tốt. Những chỉ dẫn quan trọng có thể bị bỏ sót nếu nằm giữa nhiều log không liên quan, hoặc bị nhiễu bởi nội dung mâu thuẫn."
      },
      {
        "type": "steps",
        "title": "Thiết kế context cho coding agent",
        "items": [
          {
            "title": "Đưa mục tiêu và constraints rõ ràng",
            "text": "Ví dụ file nào được phép sửa, test nào cần pass, có được chạy command mạng không."
          },
          {
            "title": "Cấp dữ liệu đúng lúc",
            "text": "Tra function liên quan, stack trace và test; tránh dump toàn bộ repository không có chọn lọc."
          },
          {
            "title": "Giữ lại kết quả quan sát quan trọng",
            "text": "Sau khi chạy test, tóm tắt lỗi và thay đổi đã thử để tránh lặp vòng."
          },
          {
            "title": "Giữ ranh giới tin cậy",
            "text": "Văn bản từ file hoặc website chỉ là dữ liệu, không tự động có quyền ra lệnh cho agent."
          }
        ]
      },
      {
        "type": "note",
        "title": "Cảnh báo về 'memory'",
        "text": "Chat history, KV cache, RAG index và bộ nhớ ứng dụng là các khái niệm khác nhau. Một agent “nhớ” dự án của bạn có thể vì ứng dụng lưu state ở ngoài model, chứ không phải trọng số LLM vừa được cập nhật."
      },
      {
        "type": "question",
        "title": "Tự audit prompt",
        "text": "Lấy một phiên sửa bug dài. Những phần nào thực sự giúp model quyết định bước tiếp theo? Những tool logs nào có thể được nén hoặc bỏ mà không làm mất bằng chứng?"
      }
    ]
  },
  "kv-cache": {
    "intro": "KV cache là một kỹ thuật tối ưu inference rất quan trọng: model tái sử dụng Key/Value của các token đã xử lý thay vì tính lại toàn bộ prefix sau mỗi token mới.",
    "minutes": 20,
    "sections": [
      {
        "type": "text",
        "title": "Vì sao cần cache ở generation?",
        "text": "Khi sinh token tự hồi quy, prefix dài ra mỗi bước. Nếu chạy lại đầy đủ self-attention và projections cho toàn bộ prefix từ đầu, nhiều phép tính giống nhau sẽ bị lặp. Trong causal decoder, representations dùng để tạo Key/Value của những vị trí cũ ở mỗi layer có thể được lưu lại để sử dụng cho token mới.\n\nKhi token mới đến, hệ thống tính query cho vị trí đó, đồng thời thêm K/V mới vào cache và dùng K/V cũ để tính attention. Kỹ thuật này đặc biệt có giá trị khi sinh dài, nhưng đổi lại tốn memory tương ứng với số layers, heads, head dimension và sequence length."
      },
      {
        "type": "code",
        "title": "Khác nhau giữa không cache và có cache",
        "code": "# Không cache (minh họa)\nfor step in steps:\n    logits = model(full_prefix)   # tính lại nhiều phần cũ\n    full_prefix.append(pick(logits[-1]))\n\n# Với KV cache (minh họa)\npast = empty_cache()\nfor step in steps:\n    logits, past = model(new_tokens, past_key_values=past)\n    new_tokens = [pick(logits[-1])]",
        "language": "PSEUDOCODE",
        "text": "Thực tế các engine có thêm paged KV cache, prefix caching, batching và chính sách evict cache. Đừng suy mọi backend đều triển khai giống pseudocode."
      },
      {
        "type": "compare",
        "title": "Ba khái niệm bạn sẽ gặp trong inference",
        "rows": [
          [
            "Prefill",
            "Xử lý prompt ban đầu, tạo hidden states và cache cho prefix."
          ],
          [
            "Decode",
            "Sinh token mới qua những bước tiếp theo, thường bị giới hạn hơn bởi memory bandwidth và cache."
          ],
          [
            "KV cache memory",
            "Tài nguyên để lưu Key/Value đã tính, có thể chiếm phần lớn VRAM khi nhiều requests dài chạy đồng thời."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Mối liên hệ với context dài",
        "text": "Một request có prompt rất dài hoặc nhiều requests song song sẽ tăng áp lực memory cho KV cache. Grouped-query attention và multi-query attention là hai hướng giúp giảm số lượng KV cần lưu trong nhiều kiến trúc. Chúng đánh đổi cấu trúc attention để inference hiệu quả hơn.\n\nHiểu prefill/decode cũng giúp bạn đọc được các metric như time-to-first-token (TTFT) và tokens per second (TPS): hai chỉ số phản ánh các pha khác nhau."
      },
      {
        "type": "question",
        "title": "Tự ước lượng",
        "text": "Nếu số layer gấp đôi và mọi thứ khác giữ nguyên, KV cache memory tăng như thế nào? Nếu nhiều request có chung prefix, prefix caching có thể giúp ở pha nào?"
      }
    ]
  },
  "reasoning": {
    "intro": "Nhìn thấy một model tạo các bước giải thích không có nghĩa nó thực hiện suy luận đúng. Để đánh giá reasoning cần xem kết quả trên nhiệm vụ và cả cách hệ thống sử dụng thời gian, công cụ.",
    "minutes": 17,
    "sections": [
      {
        "type": "text",
        "title": "Có ba tầng khác nhau nên tách",
        "text": "Một là năng lực của model: nó có thể giải bài toán logic, toán, code hoặc lập kế hoạch đến đâu. Hai là cách inference sử dụng ngân sách tính toán — chẳng hạn tạo, kiểm tra hoặc chọn giữa nhiều ứng viên. Ba là môi trường bên ngoài, nơi model có thể dùng interpreter, compiler, search hoặc verifier để kiểm tra đáp án.\n\nCác bước giải thích được trình bày trước người dùng không nhất thiết là bản ghi đầy đủ cơ chế bên trong model. Ngược lại, model đôi khi có thể đưa đáp án đúng với lời giải thích chưa chặt chẽ. Vì vậy, đọc chuỗi suy luận như bằng chứng duy nhất sẽ dễ sai."
      },
      {
        "type": "compare",
        "title": "So sánh các cách cải thiện kết quả",
        "rows": [
          [
            "Prompt decomposition",
            "Chia task thành bước nhỏ, chỉ rõ yêu cầu và kiểm tra intermediate outputs."
          ],
          [
            "More inference compute",
            "Dành nhiều bước suy luận/ứng viên hơn khi hệ thống hỗ trợ, đổi lấy latency và chi phí."
          ],
          [
            "External verification",
            "Chạy test, thực thi code, giải hệ phương trình hoặc truy vấn nguồn để kiểm tra kết quả."
          ],
          [
            "Better training",
            "Train trên bài toán, dữ liệu và reward phù hợp để cải thiện năng lực nền."
          ]
        ]
      },
      {
        "type": "text",
        "title": "Với coding agent, verification mạnh hơn lời hứa",
        "text": "Một agent nói “đã sửa xong” chưa đủ. Pass unit tests, lint, typecheck hoặc reproduction steps mới là tín hiệu đáng tin hơn. Một số bug chỉ lộ ra với integration tests hoặc edge cases, nên hệ thống đánh giá vẫn cần bao phủ đủ rộng.\n\nKhi gặp task khó, đừng chỉ thêm câu “hãy suy nghĩ kỹ”. Hãy cung cấp tiêu chí thành công, ví dụ phản ví dụ, đường dẫn tới dữ liệu và khả năng kiểm chứng."
      },
      {
        "type": "question",
        "title": "Tự thiết kế verifier",
        "text": "Với task 'sửa lỗi race condition trong hàng đợi', bạn muốn agent cung cấp bằng chứng gì để xác nhận fix? Lời giải thích bằng ngôn ngữ tự nhiên, test gây race, hay đo thực tế dưới load?"
      }
    ]
  }
});
