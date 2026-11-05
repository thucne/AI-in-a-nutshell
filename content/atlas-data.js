/* Add or edit topics below. Pure data; no build tool required. */
window.AI_ATLAS_DATA = {
  "version": "1.0.0",
  "updated": "2026-11-05",
  "groups": [
    {
      "id": "history",
      "label": "01 / Lịch sử AI",
      "subtitle": "Tại sao lĩnh vực này phát triển như hôm nay?",
      "icon": "◷",
      "color": "#f4c77c",
      "order": 0
    },
    {
      "id": "foundations",
      "label": "02 / Nền tảng học máy",
      "subtitle": "Tư duy toán & cách máy học từ dữ liệu",
      "icon": "∑",
      "color": "#a9c9ff",
      "order": 1
    },
    {
      "id": "llm",
      "label": "03 / Bên trong LLM",
      "subtitle": "Một token đi qua mô hình như thế nào?",
      "icon": "◇",
      "color": "#c4aeff",
      "order": 2
    },
    {
      "id": "training",
      "label": "04 / Huấn luyện & tối ưu",
      "subtitle": "Weights được học và điều chỉnh ra sao?",
      "icon": "↗",
      "color": "#f6acb8",
      "order": 3
    },
    {
      "id": "agents",
      "label": "05 / LLM application & Agent",
      "subtitle": "Từ model đến hệ thống biết sử dụng công cụ",
      "icon": "⌘",
      "color": "#a8ead8",
      "order": 4
    },
    {
      "id": "frontier",
      "label": "06 / Mở rộng góc nhìn",
      "subtitle": "Multimodal, MoE và những câu hỏi còn mở",
      "icon": "✦",
      "color": "#f0dd91",
      "order": 5
    }
  ],
  "topics": [
    {
      "id": "ai-history",
      "group": "history",
      "title": "AI không phải một dòng tiến hóa thẳng",
      "level": "Nhập môn",
      "minutes": 8,
      "summary": "Ba nhánh chính đan xen: symbolic AI, thống kê và neural networks.",
      "why": "Lịch sử giúp hiểu tại sao một kỹ thuật xuất hiện, và vì sao điều “mới” thường xây trên ý tưởng cũ.",
      "how": "Symbolic AI biểu diễn tri thức bằng quy tắc; thống kê học phân phối từ dữ liệu; connectionism xây mạng nhiều đơn vị đơn giản. Các nhánh cùng tồn tại và vay mượn ý tưởng của nhau.",
      "example": "Một hệ thống search có thể kết hợp logic filter + ranking ML + LLM tóm tắt.",
      "misconception": "Không phải toàn bộ AI trước năm 2017 đều “thất bại”; nhiều nhánh vẫn rất hữu dụng.",
      "prerequisites": [],
      "related": [
        "symbolic",
        "statistical-ml",
        "deep-learning"
      ],
      "sources": [
        {
          "label": "HISTORY",
          "url": "https://www.ll.mit.edu/sites/default/files/publication/doc/2022-10/Artificial%20Intelligence%20Short%20History%2C%20Present%20Developments%2C%20and%20Future%20Outlook%20-%20Final%20Report%20-%20Martinez_.pdf"
        },
        {
          "label": "DARTMOUTH",
          "url": "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "symbolic",
      "group": "history",
      "title": "1950s–1970s · Symbolic AI",
      "level": "Nhập môn",
      "minutes": 9,
      "summary": "Logic, search, biểu diễn tri thức và luật IF–THEN.",
      "why": "Từ thập niên 1950, mục tiêu là mô hình hóa suy luận bằng phép biến đổi ký hiệu rõ ràng.",
      "how": "State-space search, heuristic search, theorem proving và knowledge representation giúp giải bài toán có cấu trúc. AI được xác lập thành lĩnh vực nghiên cứu tại Dartmouth năm 1956.",
      "example": "Chess engine truyền thống dùng tìm kiếm nước đi và hàm đánh giá; expert system dùng rule base + inference engine.",
      "misconception": "AI không đồng nghĩa với deep learning hay chatbot.",
      "prerequisites": [
        "ai-history"
      ],
      "related": [
        "expert-systems"
      ],
      "sources": [
        {
          "label": "DARTMOUTH",
          "url": "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth"
        },
        {
          "label": "HISTORY",
          "url": "https://www.ll.mit.edu/sites/default/files/publication/doc/2022-10/Artificial%20Intelligence%20Short%20History%2C%20Present%20Developments%2C%20and%20Future%20Outlook%20-%20Final%20Report%20-%20Martinez_.pdf"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "expert-systems",
      "group": "history",
      "title": "1970s–1980s · Expert systems & AI winters",
      "level": "Nhập môn",
      "minutes": 8,
      "summary": "Bùng nổ rule-based systems, rồi gặp giới hạn mở rộng và duy trì.",
      "why": "Expert systems cho thấy encode kiến thức chuyên gia có thể tạo giá trị, nhưng công sức duy trì luật rất đắt.",
      "how": "Knowledge engineer thu thập quy tắc, inference engine áp dụng chúng. Hệ thống khó xử lý ngoại lệ và common sense; các chu kỳ kỳ vọng vượt năng lực thực tế dẫn đến giai đoạn cắt giảm đầu tư (“AI winters”).",
      "example": "Rule “nếu triệu chứng A + B thì gợi ý C” không tự khái quát tốt khi gặp mẫu mới.",
      "misconception": "“AI winter” là giai đoạn giảm kỳ vọng/đầu tư, không phải AI ngừng nghiên cứu.",
      "prerequisites": [
        "symbolic"
      ],
      "related": [
        "statistical-ml"
      ],
      "sources": [
        {
          "label": "HISTORY",
          "url": "https://www.ll.mit.edu/sites/default/files/publication/doc/2022-10/Artificial%20Intelligence%20Short%20History%2C%20Present%20Developments%2C%20and%20Future%20Outlook%20-%20Final%20Report%20-%20Martinez_.pdf"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "statistical-ml",
      "group": "history",
      "title": "1990s–2000s · Statistical ML",
      "level": "Nhập môn",
      "minutes": 9,
      "summary": "Học từ dữ liệu thay vì viết hết luật.",
      "why": "Khi dữ liệu tăng, thống kê và ML trở thành cách hiệu quả để xử lý nhiễu và bất định.",
      "how": "Regression, decision tree, SVM, probabilistic models và feature engineering học ranh giới quyết định từ ví dụ; kết hợp đánh giá trên tập dữ liệu chưa thấy.",
      "example": "Spam filter học từ email gắn nhãn thay vì duy trì hàng nghìn luật thủ công.",
      "misconception": "“ML” không chỉ là neural network; mô hình tuyến tính và cây vẫn rất mạnh.",
      "prerequisites": [
        "ai-history"
      ],
      "related": [
        "supervised",
        "deep-learning"
      ],
      "sources": [
        {
          "label": "HISTORY",
          "url": "https://www.ll.mit.edu/sites/default/files/publication/doc/2022-10/Artificial%20Intelligence%20Short%20History%2C%20Present%20Developments%2C%20and%20Future%20Outlook%20-%20Final%20Report%20-%20Martinez_.pdf"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "deep-learning",
      "group": "history",
      "title": "2012–2016 · Deep learning bứt phá",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Nhiều lớp mạng học features và GPU giúp huấn luyện ở quy mô lớn.",
      "why": "AlexNet (2012) là cột mốc quan trọng cho computer vision hiện đại; AlphaGo (2016) kết hợp deep learning, search và RL.",
      "how": "Backpropagation, dữ liệu lớn, GPU, kiến trúc CNN/RNN giúp mô hình học biểu diễn qua nhiều tầng thay vì chỉ feature thủ công.",
      "example": "CNN lớp đầu học cạnh, lớp sau học texture/hình dạng — chỉ là trực giác, không phải mỗi neuron có một nhãn cố định.",
      "misconception": "Deep learning không bắt đầu năm 2012; nhiều nền tảng đã có từ thập niên 1980 và trước đó.",
      "prerequisites": [
        "statistical-ml",
        "neural-network"
      ],
      "related": [
        "transformer",
        "gradient"
      ],
      "sources": [
        {
          "label": "ALEXNET",
          "url": "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks"
        },
        {
          "label": "ALPHAGO",
          "url": "https://www.nature.com/articles/nature16961"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "transformer-era",
      "group": "history",
      "title": "2017–nay · Transformer, LLM, Agent",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Transformer tăng khả năng song song hóa và mở đường cho scaling LLM.",
      "why": "2017 có Transformer; những năm sau pretraining quy mô lớn, instruction tuning, chat interface, retrieval và tool use biến model thành hệ thống hữu dụng.",
      "how": "Mốc nổi bật: Transformer (2017), BERT/GPT (2018), GPT-3 (2020), InstructGPT/ChatGPT (2022), agentic workflows phát triển mạnh tiếp theo. Đây là chuỗi mốc chọn lọc, không đại diện mọi lĩnh vực AI.",
      "example": "Coding agent kết hợp model, context repo, terminal, test runner, git và vòng lặp sửa lỗi.",
      "misconception": "Agent không phải kiến trúc model mới; phần lớn là hệ thống điều phối quanh model.",
      "prerequisites": [
        "deep-learning"
      ],
      "related": [
        "transformer",
        "pretraining",
        "agent-loop"
      ],
      "sources": [
        {
          "label": "TRANSFORMER",
          "url": "https://research.google/pubs/attention-is-all-you-need/"
        },
        {
          "label": "BERT",
          "url": "https://arxiv.org/abs/1810.04805"
        },
        {
          "label": "GPT3",
          "url": "https://arxiv.org/abs/2005.14165"
        },
        {
          "label": "AGENTS",
          "url": "https://www.anthropic.com/engineering/building-effective-agents"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "ai-vs-ml",
      "group": "foundations",
      "title": "AI vs ML vs DL vs LLM",
      "level": "Nhập môn",
      "minutes": 7,
      "summary": "Bốn khái niệm ở các mức trừu tượng khác nhau.",
      "why": "Đây là la bàn để không gộp mọi sản phẩm AI vào cùng một loại.",
      "how": "AI = mục tiêu xây hệ thống thể hiện năng lực thông minh; ML = nhóm phương pháp học từ dữ liệu; deep learning = ML dùng mạng nhiều tầng; LLM = model ngôn ngữ lớn thường dựa trên transformer. Agent là kiến trúc hệ thống, không phải tầng thứ năm trong một sơ đồ bao hàm đơn giản.",
      "example": "Pathfinding A* thuộc AI nhưng không nhất thiết là ML; GPT là LLM; Codex-like agent kết hợp LLM và tool.",
      "misconception": "AI ⊃ ML ⊃ deep learning có ích để định hướng, nhưng không diễn tả tất cả giao thoa.",
      "prerequisites": [],
      "related": [
        "supervised",
        "neural-network",
        "agent-loop"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "supervised",
      "group": "foundations",
      "title": "Supervised, self-supervised & RL",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Ba cách xây tín hiệu học khác nhau.",
      "why": "Hiểu mục tiêu tối ưu sẽ giúp bạn đọc paper và hiểu training pipeline.",
      "how": "Supervised: học từ (input,label). Self-supervised: tạo mục tiêu học từ dữ liệu gốc, chẳng hạn dự đoán token kế tiếp. Reinforcement learning: policy nhận reward từ tương tác/trải nghiệm; thực tế có nhiều biến thể.",
      "example": "Email spam: label spam/ham; LLM pretraining: đoán token; game agent: tối đa hóa reward.",
      "misconception": "Self-supervised không có nghĩa “không có target”; target được suy ra từ dữ liệu.",
      "prerequisites": [],
      "related": [
        "loss",
        "pretraining",
        "rlhf"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "vectors",
      "group": "foundations",
      "title": "Vector, matrix & representation",
      "level": "Cốt lõi",
      "minutes": 9,
      "summary": "Các mảng số là ngôn ngữ tính toán của neural networks.",
      "why": "Embedding, attention và gradient đều vận hành trên vector/matrix.",
      "how": "Mỗi token hoặc feature được biểu diễn bởi vector d chiều; phép nhân ma trận biến đổi không gian biểu diễn, phép cộng và activation tạo khả năng mô hình hóa phi tuyến.",
      "example": "Một batch 8 câu, mỗi câu 128 tokens, hidden size 768 → tensor dạng [8,128,768].",
      "misconception": "Mỗi chiều vector không bắt buộc tương ứng một khái niệm dễ gọi tên.",
      "prerequisites": [],
      "related": [
        "embedding",
        "attention",
        "neural-network"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "probability",
      "group": "foundations",
      "title": "Logits, softmax & xác suất",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Từ điểm số chưa chuẩn hóa thành phân phối dự đoán.",
      "why": "LLM xuất ra logits trước khi chọn token; hiểu softmax là hiểu một nửa decoding.",
      "how": "Với logits zᵢ, pᵢ = exp(zᵢ/T)/Σexp(zⱼ/T). Nhiệt độ T thay đổi độ sắc của phân phối; T thấp tập trung xác suất vào lựa chọn có logit cao.",
      "example": "Các logits [2,1,0] cho xác suất lần lượt xấp xỉ [0.67,0.24,0.09] khi T=1.",
      "misconception": "Nhiệt độ không làm model “hiểu sâu hơn”; nó chủ yếu ảnh hưởng phân phối chọn token.",
      "prerequisites": [
        "vectors"
      ],
      "related": [
        "sampling",
        "loss"
      ],
      "sources": [],
      "exercise": "Mở tab Playground và thay temperature. Quan sát xác suất các token thay đổi."
    },
    {
      "id": "loss",
      "group": "foundations",
      "title": "Loss & cross-entropy",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Đo mức sai lệch giữa dự đoán và target.",
      "why": "Không có hàm mục tiêu thì model không biết cần điều chỉnh weights theo hướng nào.",
      "how": "Trong next-token training, cross-entropy trên token đúng bằng −log p(token_đúng). Tối thiểu hóa loss trung bình trên dữ liệu giúp tăng xác suất cho token mục tiêu.",
      "example": "Nếu p(target)=0.1 → loss≈2.30; p(target)=0.9 → loss≈0.105.",
      "misconception": "Train loss giảm không đảm bảo hệ thống hữu ích, factual hoặc an toàn hơn.",
      "prerequisites": [
        "probability"
      ],
      "related": [
        "gradient",
        "pretraining"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "gradient",
      "group": "foundations",
      "title": "Gradient descent & backpropagation",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Dùng đạo hàm để điều chỉnh hàng triệu đến hàng tỷ tham số.",
      "why": "Đây là cơ chế học thật sự phía sau phần lớn deep learning.",
      "how": "Forward pass tạo prediction → tính loss → backward pass dùng chain rule để tính gradient ∂L/∂w → optimizer cập nhật w ← w − η∇L (đơn giản hóa SGD).",
      "example": "Nếu tăng một weight làm loss tăng, gradient dương gợi ý giảm weight đó.",
      "misconception": "Backprop không phải “mô hình suy nghĩ ngược”; đó là thuật toán tính đạo hàm hiệu quả.",
      "prerequisites": [
        "loss",
        "vectors"
      ],
      "related": [
        "neural-network",
        "training-loop"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "neural-network",
      "group": "foundations",
      "title": "Neuron, MLP & các lớp mạng",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Từ phép biến đổi tuyến tính đến function approximation.",
      "why": "Transformer chứa cả attention lẫn các khối feed-forward (MLP).",
      "how": "Một layer đơn giản: h = activation(Wx+b). Xếp nhiều layer với nonlinearity tạo hàm rất linh hoạt; số tham số, kiến trúc, dữ liệu và optimization quyết định khả năng học.",
      "example": "MLP 2 lớp biến input vector thành đặc trưng có ích cho lớp sau.",
      "misconception": "“Neuron” nhân tạo chỉ là ẩn dụ kỹ thuật, không phải sao chép neuron sinh học.",
      "prerequisites": [
        "vectors",
        "gradient"
      ],
      "related": [
        "attention",
        "transformer"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "tokenization",
      "group": "llm",
      "title": "Tokenization — text thành IDs",
      "level": "Cốt lõi",
      "minutes": 9,
      "summary": "LLM không trực tiếp đọc ký tự; input được chia thành token IDs.",
      "why": "Một mô hình thao tác trên token IDs và vectors, không phải “hiểu” string theo cách chương trình thông thường.",
      "how": "Tokenizer có vocabulary và quy tắc phân đoạn (ví dụ BPE). Token có thể là từ, mảnh từ, dấu câu hoặc ký tự; phân đoạn thay đổi theo model và ngôn ngữ.",
      "example": "“unbelievable” có thể thành nhiều mảnh; tiếng Việt và code có patterns khác nhau.",
      "misconception": "1 token ≠ 1 từ; ví dụ trong bài chỉ mang tính minh họa, không mô phỏng tokenizer cụ thể.",
      "prerequisites": [
        "ai-vs-ml"
      ],
      "related": [
        "embedding",
        "context-window"
      ],
      "sources": [
        {
          "label": "TOKENS",
          "url": "https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "embedding",
      "group": "llm",
      "title": "Embedding — IDs thành vectors",
      "level": "Cốt lõi",
      "minutes": 9,
      "summary": "Lookup một hàng của ma trận trọng số để biểu diễn token.",
      "why": "Token ID chỉ là số thứ tự; model cần biểu diễn liên tục để tính attention.",
      "how": "Embedding matrix E có dạng [vocab_size, d_model]; token t lấy E[t]. Vectors sau đó được cập nhật qua các transformer layers, tạo contextual representations.",
      "example": "Hai từ xuất hiện trong ngữ cảnh giống nhau có thể có biểu diễn hữu ích gần nhau, nhưng không phải quy tắc tuyệt đối.",
      "misconception": "Token embedding ban đầu không phải toàn bộ “ý nghĩa” cố định của từ.",
      "prerequisites": [
        "tokenization",
        "vectors"
      ],
      "related": [
        "positional",
        "attention"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "positional",
      "group": "llm",
      "title": "Position information — biết thứ tự",
      "level": "Cốt lõi",
      "minutes": 8,
      "summary": "Self-attention thuần không tự biết vị trí nếu thiếu thông tin thứ tự.",
      "why": "Câu “chó cắn mèo” và “mèo cắn chó” cần được phân biệt.",
      "how": "Positional embeddings hoặc các phương án như RoPE đưa thông tin vị trí/tương đối vào tính toán attention. Cách làm khác nhau giữa các họ model.",
      "example": "Cùng token “bank” ở hai vị trí và ngữ cảnh sẽ tạo biểu diễn khác sau các layers.",
      "misconception": "Không có một phương án positional encoding chung cho mọi transformer.",
      "prerequisites": [
        "embedding"
      ],
      "related": [
        "attention",
        "transformer"
      ],
      "sources": [
        {
          "label": "TRANSFORMER",
          "url": "https://research.google/pubs/attention-is-all-you-need/"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "attention",
      "group": "llm",
      "title": "Self-attention — Query / Key / Value",
      "level": "Cốt lõi",
      "minutes": 15,
      "summary": "Mỗi token có thể kết hợp thông tin từ token khác theo trọng số.",
      "why": "Đây là trung tâm của transformer; hiểu Q/K/V giúp đọc những tối ưu hiện đại.",
      "how": "Từ hidden states X, tạo Q=XWq, K=XWk, V=XWv. Scores = QKᵀ/√dₖ; masking loại vị trí không được nhìn; softmax(scores) nhân V tạo representation mới. Multi-head cho phép nhiều cách kết hợp song song.",
      "example": "Trong “The animal didn’t cross because it was tired”, attention có thể giúp token “it” nhận thông tin từ các token liên quan.",
      "misconception": "Attention weights không phải lời giải thích nhân quả đáng tin cậy cho toàn bộ quyết định của model.",
      "prerequisites": [
        "vectors",
        "probability",
        "embedding"
      ],
      "related": [
        "transformer",
        "kv-cache"
      ],
      "sources": [
        {
          "label": "ATTENTION",
          "url": "https://arxiv.org/abs/1706.03762"
        }
      ],
      "exercise": "Mở tab Playground → Attention. Chuyển query token để thấy ma trận trọng số minh họa thay đổi."
    },
    {
      "id": "transformer",
      "group": "llm",
      "title": "Transformer block — bên trong một layer",
      "level": "Cốt lõi",
      "minutes": 15,
      "summary": "Attention + MLP + residual + normalization, lặp nhiều tầng.",
      "why": "Một LLM decoder-only hiện đại thường gồm một stack transformer blocks (với biến thể kiến trúc).",
      "how": "Luồng khái quát: hidden states → self-attention (causal mask) → residual / normalization → feed-forward MLP → residual / normalization → output. Thứ tự normalization, activation và attention variants có thể khác nhau.",
      "example": "Attention gom thông tin giữa token; MLP biến đổi features ở từng vị trí; residual giúp tối ưu mạng sâu.",
      "misconception": "Paper Transformer 2017 có encoder-decoder; không phải mọi LLM đều giống đúng sơ đồ gốc.",
      "prerequisites": [
        "attention",
        "neural-network",
        "positional"
      ],
      "related": [
        "causal-lm",
        "training-loop"
      ],
      "sources": [
        {
          "label": "TRANSFORMER",
          "url": "https://research.google/pubs/attention-is-all-you-need/"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "causal-lm",
      "group": "llm",
      "title": "Next-token prediction & causal mask",
      "level": "Cốt lõi",
      "minutes": 13,
      "summary": "Dự đoán token tiếp theo từ prefix đang có.",
      "why": "Đây là objective rất phổ biến cho decoder-only LLM (GPT-like).",
      "how": "P(x₁…xₙ)=∏ᵢP(xᵢ|x₁…xᵢ₋₁). Trong training, causal mask ngăn token nhìn “tương lai”; nhờ teacher forcing có thể tính loss nhiều vị trí song song. Lúc generate, output nối vào context rồi lặp.",
      "example": "Prompt “Thủ đô Pháp là” → logits trên vocabulary → chọn token kế → tiếp tục.",
      "misconception": "“Chỉ đoán token” là mô tả objective, không nói lên toàn bộ năng lực nổi lên sau huấn luyện.",
      "prerequisites": [
        "transformer",
        "loss"
      ],
      "related": [
        "sampling",
        "pretraining"
      ],
      "sources": [
        {
          "label": "CAUSAL",
          "url": "https://huggingface.co/docs/transformers/en/tasks/language_modeling"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "sampling",
      "group": "llm",
      "title": "Decoding — greedy, top-k, top-p, temperature",
      "level": "Cốt lõi",
      "minutes": 11,
      "summary": "Biến phân phối token thành một câu trả lời cụ thể.",
      "why": "Output khác nhau không nhất thiết do weights thay đổi.",
      "how": "Greedy chọn token có xác suất cao nhất; sampling lấy mẫu từ phân phối; top-k giữ k token đầu, top-p giữ tập token tích lũy p, temperature điều chỉnh xác suất trước lấy mẫu. Một số API có tham số/giới hạn khác.",
      "example": "Prompt giống hệt có thể cho hai câu khác nhau khi sampling ngẫu nhiên.",
      "misconception": "Temperature=0 thường gần deterministic nhưng toàn hệ thống không luôn bảo đảm kết quả lặp lại 100%.",
      "prerequisites": [
        "probability",
        "causal-lm"
      ],
      "related": [
        "context-window"
      ],
      "sources": [],
      "exercise": "Thử Playground với T=0.4 và T=1.6, so sánh độ tập trung xác suất."
    },
    {
      "id": "context-window",
      "group": "llm",
      "title": "Context window & in-context learning",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Những token model có thể xét trong một lần xử lý có giới hạn.",
      "why": "Điều này quyết định prompt dài, repo context, retrieval và chi phí.",
      "how": "Context bao gồm instructions, messages, tool outputs và các nội dung liên quan; dài hơn thường tăng chi phí/latency. In-context learning là thay đổi hành vi bằng ví dụ trong prompt, không đồng nghĩa update model weights.",
      "example": "Cho 2 ví dụ JSON transformation rồi yêu cầu ví dụ thứ 3 — model áp dụng pattern trong context.",
      "misconception": "Context dài không tự động đảm bảo model chú ý đúng mọi chi tiết.",
      "prerequisites": [
        "tokenization",
        "causal-lm"
      ],
      "related": [
        "context-engineering",
        "rag",
        "kv-cache"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "kv-cache",
      "group": "llm",
      "title": "KV cache & inference efficiency",
      "level": "Đào sâu",
      "minutes": 11,
      "summary": "Lưu Key/Value của prefix để tránh tính lại toàn bộ ở mỗi token.",
      "why": "Một agent chat dài hoặc output dài cần xử lý latency và memory rất thực tế.",
      "how": "Ở autoregressive decoding, các layer giữ K/V trước đó; token mới tính K/V mới và attention tới cache. Cache tăng memory theo số token/layers và có thể dùng prefix caching hoặc eviction tùy hệ thống.",
      "example": "Không có KV cache, mỗi bước generate có thể tái tính rất nhiều biểu diễn prefix giống nhau.",
      "misconception": "KV cache không làm tăng kiến thức model; nó là kỹ thuật tăng hiệu quả tính toán.",
      "prerequisites": [
        "attention",
        "causal-lm"
      ],
      "related": [
        "context-window"
      ],
      "sources": [
        {
          "label": "FLASH",
          "url": "https://arxiv.org/abs/2205.14135"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "reasoning",
      "group": "llm",
      "title": "Reasoning / test-time compute",
      "level": "Đào sâu",
      "minutes": 11,
      "summary": "Dùng thêm compute trong inference cho các bài cần nhiều bước.",
      "why": "Các model tối ưu cho reasoning làm nổi bật khác biệt giữa model “trả lời nhanh” và hệ thống dành thời gian xử lý bài khó.",
      "how": "Khả năng reasoning phụ thuộc dữ liệu, training, inference policy và có thể thêm search/verifier; không thể đánh đồng mọi model “reasoning” với một thuật toán duy nhất. Cần đánh giá bằng độ chính xác, cost và latency.",
      "example": "Một coding task có thể cần viết giả thuyết, chạy test, sửa code và kiểm chứng thay vì trả lời một lượt.",
      "misconception": "Một lời giải thích mạch lạc không chứng minh reasoning đúng; cần kiểm chứng bằng kết quả.",
      "prerequisites": [
        "causal-lm"
      ],
      "related": [
        "agent-loop",
        "evals"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "pretraining",
      "group": "training",
      "title": "Pretraining — học pattern từ corpus",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Tối ưu objective trên lượng lớn text/code và dữ liệu khác.",
      "why": "Pretraining tạo nền tảng tri thức thống kê và biểu diễn; không phải ghi chép một database đáng tin cậy.",
      "how": "Dữ liệu được thu thập/lọc/dedup/mixture, token hóa, chia batch. Với causal LM, tối ưu cross-entropy dự đoán token tiếp theo qua nhiều bước trên GPU/TPU.",
      "example": "Model nhìn vô số pattern code, tài liệu và ngôn ngữ, rồi học weights có ích cho nhiều tác vụ.",
      "misconception": "Không nên hiểu model là tìm exact match câu trả lời trong training set (dù memorization có thể xảy ra).",
      "prerequisites": [
        "causal-lm",
        "gradient"
      ],
      "related": [
        "training-loop",
        "sft"
      ],
      "sources": [
        {
          "label": "CAUSAL",
          "url": "https://huggingface.co/docs/transformers/en/tasks/language_modeling"
        },
        {
          "label": "GPT3",
          "url": "https://arxiv.org/abs/2005.14165"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "training-loop",
      "group": "training",
      "title": "Training loop: forward → loss → backward → update",
      "level": "Cốt lõi",
      "minutes": 14,
      "summary": "Gradient accumulation, batching, optimizer, validation, checkpoint.",
      "why": "Bạn sẽ có mental model của pipeline huấn luyện một mô hình thật.",
      "how": "Một step: sample batch → forward → cross-entropy → backprop → optimizer step; lặp hàng tỷ token. Mixed precision, distributed data/model parallelism và checkpoint là các phần kỹ thuật giúp scale.",
      "example": "Pseudo: for batch in loader: loss=model(batch); loss.backward(); optimizer.step(); optimizer.zero_grad().",
      "misconception": "Một epoch không bắt buộc là đơn vị phù hợp cho mọi bài pretraining quy mô lớn.",      "prerequisites": [
        "gradient",
        "pretraining"
      ],
      "related": [
        "sft",
        "lora"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "sft",
      "group": "training",
      "title": "SFT — supervised instruction tuning",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Học phong cách trả lời theo ví dụ instruction → good response.",
      "why": "Base model biết hoàn thành text nhưng chưa chắc hiểu ý người dùng hoặc đối thoại đúng format.",
      "how": "SFT sử dụng dữ liệu demonstration/ideal responses, tối ưu xác suất các response tokens trong bối cảnh instruction. Đây thường là một giai đoạn của post-training.",
      "example": "“Tóm tắt email thành 3 bullet” + ví dụ output tốt → model dần tuân theo định dạng.",
      "misconception": "SFT không thay thế kiểm chứng sự thật; data quality và evaluation vẫn quan trọng.",
      "prerequisites": [
        "pretraining"
      ],
      "related": [
        "rlhf",
        "lora"
      ],
      "sources": [
        {
          "label": "INSTRUCT",
          "url": "https://openai.com/index/instruction-following/"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "rlhf",
      "group": "training",
      "title": "RLHF, DPO & preference optimization",
      "level": "Đào sâu",
      "minutes": 13,
      "summary": "Điều chỉnh hành vi dựa trên phản hồi hoặc cặp ưu tiên.",
      "why": "Model có nhiều câu trả lời “hợp ngữ pháp” nhưng khác nhau về hữu ích, trung thực và an toàn.",
      "how": "RLHF cổ điển: SFT → label ranking → reward model → tối ưu policy (ví dụ PPO). DPO trực tiếp tối ưu từ các cặp preferred/rejected dưới mục tiêu tương ứng, tránh cần reward model riêng theo công thức DPO.",
      "example": "Hai câu trả lời cùng đúng kỹ thuật nhưng một câu rõ ràng, dễ dùng hơn: dữ liệu ưu tiên giúp định hướng.",
      "misconception": "Không phải mọi model chat đều dùng cùng pipeline RLHF; nhiều biến thể post-training đang tồn tại.",
      "prerequisites": [
        "sft",
        "loss"
      ],
      "related": [
        "evals"
      ],
      "sources": [
        {
          "label": "INSTRUCT",
          "url": "https://openai.com/index/instruction-following/"
        },
        {
          "label": "DPO",
          "url": "https://arxiv.org/abs/2305.18290"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "lora",
      "group": "training",
      "title": "Fine-tuning, LoRA & adapters",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Thích nghi model với một domain/task bằng huấn luyện bổ sung.",
      "why": "Phân biệt khi nào cần fine-tuning, khi nào RAG hay prompt là đủ sẽ tiết kiệm nhiều chi phí.",
      "how": "Full fine-tuning cập nhật nhiều/tất cả weights; LoRA giữ phần lớn weights cố định và học hai ma trận low-rank ΔW≈BA, giảm tham số trainable. Quantization-aware variants có thêm trade-off.",
      "example": "Muốn output JSON nhất quán có thể bắt đầu với schema/prompt; domain style ổn định có thể cân nhắc SFT/LoRA.",
      "misconception": "Fine-tuning không phải công cụ cập nhật facts liên tục tốt nhất; dữ liệu động thường hợp với retrieval.",
      "prerequisites": [
        "training-loop",
        "sft"
      ],
      "related": [
        "rag"
      ],
      "sources": [
        {
          "label": "LORA",
          "url": "https://arxiv.org/abs/2106.09685"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "scaling",
      "group": "training",
      "title": "Scaling laws & trade-offs",
      "level": "Đào sâu",
      "minutes": 10,
      "summary": "Model size, compute, data quantity/quality và inference budget.",
      "why": "Tại sao mô hình lớn hơn thường mạnh hơn nhưng cũng đắt hơn?",
      "how": "Empirical scaling laws mô tả quan hệ giữa loss, parameters, dataset và compute trong một số miền. Tuy nhiên chất lượng dữ liệu, kiến trúc, mixture, training recipe, inference compute và eval cũng ảnh hưởng mạnh.",
      "example": "Hai model cùng số tham số có chất lượng khác nhau vì dữ liệu/training recipe khác.",
      "misconception": "Parameter count không phải thước đo duy nhất; benchmark cũng có giới hạn.",
      "prerequisites": [
        "pretraining"
      ],
      "related": [
        "reasoning",
        "moe"
      ],
      "sources": [
        {
          "label": "SCALING",
          "url": "https://arxiv.org/abs/2001.08361"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "prompts",
      "group": "agents",
      "title": "Prompting, instructions & structured outputs",
      "level": "Nhập môn",
      "minutes": 9,
      "summary": "Thiết kế input để model hiểu mục tiêu và contract đầu ra.",
      "why": "Đây là điểm bắt đầu khi tích hợp LLM vào sản phẩm.",
      "how": "Phân biệt hệ thống instructions, user request, context/data; dùng output schema/validator để kiểm tra hợp lệ, few-shot examples khi cần. Prompt chỉ tạo tín hiệu hướng dẫn, không tạo rào an ninh cứng.",
      "example": "Yêu cầu model trả về object có fields {risk, explanation, action}, sau đó validate bằng code.",
      "misconception": "Một prompt “không bao giờ làm X” không thay thế authorization ở backend.",
      "prerequisites": [
        "context-window"
      ],
      "related": [
        "context-engineering",
        "security"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "rag",
      "group": "agents",
      "title": "RAG — Retrieval Augmented Generation",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Đọc dữ liệu ngoài model tại thời điểm query.",
      "why": "Dùng khi kiến thức cần cập nhật, có nguồn riêng hoặc cần dẫn chứng.",
      "how": "Indexing/chunking → embeddings hoặc keyword search → retrieve → rerank → đưa context vào prompt → generate với citations. Chất lượng phụ thuộc retrieval, quyền truy cập và kiểm tra groundedness.",
      "example": "Hỏi “API nội bộ auth thế nào?” → tìm docs trong repo/wiki → trả lời có file/line references.",
      "misconception": "RAG không sửa weights và cũng không tự động loại hallucinations hay prompt injection.",
      "prerequisites": [
        "embedding",
        "context-window"
      ],
      "related": [
        "context-engineering",
        "evals"
      ],
      "sources": [
        {
          "label": "RAG",
          "url": "https://arxiv.org/abs/2005.11401"
        },
        {
          "label": "OWASP",
          "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "tool-calling",
      "group": "agents",
      "title": "Tool/function calling",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Model đề xuất lời gọi công cụ; ứng dụng mới là bên thực thi.",
      "why": "Đây là khác biệt giữa chatbot biết trả lời và coding assistant có thể chạy lệnh.",
      "how": "Backend cung cấp tool schema, model tạo structured call với arguments; orchestrator kiểm tra quyền, execute, thu kết quả và trả lại context. LLM không trực tiếp nhận quyền OS trừ khi hệ thống cấp.",
      "example": "Tool read_file({path}) → app đọc file → đưa nội dung lại cho model.",
      "misconception": "Tool call là quyết định được model đề xuất, không phải bằng chứng thao tác đã thành công.",
      "prerequisites": [
        "prompts"
      ],
      "related": [
        "agent-loop",
        "security"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "agent-loop",
      "group": "agents",
      "title": "Agent loop — observe → decide → act → verify",
      "level": "Cốt lõi",
      "minutes": 14,
      "summary": "Orchestrator dùng LLM lặp giữa suy luận, hành động và kiểm chứng.",
      "why": "Nó giải thích tại sao coding agent sửa được code thay vì chỉ gợi ý snippet.",
      "how": "State gồm goal, context, tools, budget, observations. Vòng lặp: đọc nhiệm vụ → chọn công cụ → thực thi → quan sát kết quả → điều chỉnh → dừng theo điều kiện. ReAct là một trong những công trình nền tảng về xen kẽ reasoning và actions.",
      "example": "Agent sửa bug: grep → đọc test → patch → run test → kiểm tra diff → báo cáo.",
      "misconception": "Agent ≠ model tự ý làm được mọi thứ; orchestration, permission, môi trường và stop conditions rất quan trọng.",
      "prerequisites": [
        "tool-calling",
        "context-engineering"
      ],
      "related": [
        "evals",
        "security",
        "reasoning"
      ],
      "sources": [
        {
          "label": "REACT",
          "url": "https://arxiv.org/abs/2210.03629"
        },
        {
          "label": "AGENTS",
          "url": "https://www.anthropic.com/engineering/building-effective-agents"
        }
      ],
      "exercise": "Mở tab Playground → Agent loop, quan sát cách trạng thái thay đổi qua mỗi bước."
    },
    {
      "id": "context-engineering",
      "group": "agents",
      "title": "Context engineering & memory",
      "level": "Cốt lõi",
      "minutes": 13,
      "summary": "Chọn đúng thông tin, đúng thời điểm, đúng thứ tự và đúng quyền.",
      "why": "Với coding agents, việc nạp toàn bộ repo không luôn tốt bằng tìm đúng file và kết quả test.",
      "how": "Context có instruction, task, retrieved files, tool outputs, short-term summary. Memory ngoài model có thể là store tách riêng; cần chiến lược retrieval, compaction và tránh nhiễm thông tin không tin cậy.",
      "example": "Lọc file theo symbol → đọc 200 dòng liên quan → chạy test → tóm tắt trước lượt tiếp theo.",
      "misconception": "Bigger context không đồng nghĩa better context. Và memory ngoài model khác model weights.",
      "prerequisites": [
        "context-window",
        "rag",
        "tool-calling"
      ],
      "related": [
        "agent-loop",
        "kv-cache"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "workflows",
      "group": "agents",
      "title": "Workflow vs autonomous agent",
      "level": "Cốt lõi",
      "minutes": 10,
      "summary": "Code-driven graph và model-driven loop giải quyết bài toán khác nhau.",
      "why": "Không phải task nào cũng cần AI agent.",
      "how": "Workflow có các bước định sẵn và model điền vào các bước; agent cho model quyền quyết định bước kế tiếp trong giới hạn. Cả hai có thể kết hợp với retrieval và tool calls.",
      "example": "Pipeline classify → summarize → review là workflow; debugging nhiều vòng có thể phù hợp agent.",
      "misconception": "Thêm nhiều agent có thể làm tăng latency, cost và độ khó debug, không mặc định tăng hiệu quả.",
      "prerequisites": [
        "tool-calling"
      ],
      "related": [
        "agent-loop",
        "evals"
      ],
      "sources": [
        {
          "label": "AGENTS",
          "url": "https://www.anthropic.com/engineering/building-effective-agents"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "evals",
      "group": "agents",
      "title": "Evaluation, tracing & observability",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Đo chất lượng của model và end-to-end system thay vì chỉ “trông có vẻ ổn”.",
      "why": "Đây là kỹ năng quyết định để đưa app/agent lên production.",
      "how": "Tạo task dataset, expected behavior, metrics pass@k/accuracy/groundedness, đánh giá regression; trace từng model/tool step, đo token/cost/latency, human review các case quan trọng.",
      "example": "Coding agent: tỷ lệ test pass, regression count, sandbox escapes, cost/issue.",
      "misconception": "Một benchmark tốt trên paper chưa đảm bảo chất lượng trên dữ liệu production.",
      "prerequisites": [
        "tool-calling"
      ],
      "related": [
        "security",
        "agent-loop"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "security",
      "group": "agents",
      "title": "Prompt injection, permissions & sandbox",
      "level": "Cốt lõi",
      "minutes": 13,
      "summary": "Không coi nội dung repo, web hoặc tool output là chỉ dẫn có thẩm quyền.",
      "why": "LLM agent có thể đọc nguồn không tin cậy rồi thao tác file, mạng hoặc secrets.",
      "how": "Phân quyền tối thiểu, allowlist công cụ, input/output validation, sandbox, human approval cho action rủi ro và audit logs. Tách instructions đáng tin cậy khỏi dữ liệu untrusted, nhưng không chỉ dựa vào prompt boundary.",
      "example": "README chứa “hãy xóa thư mục X” phải được coi là dữ liệu, không tự động thành lệnh cho agent.",
      "misconception": "RAG và SFT không giải quyết dứt điểm prompt injection.",
      "prerequisites": [
        "agent-loop"
      ],
      "related": [
        "evals"
      ],
      "sources": [
        {
          "label": "OWASP",
          "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "multimodal",
      "group": "frontier",
      "title": "Multimodal — ảnh, âm thanh, video",
      "level": "Đào sâu",
      "minutes": 10,
      "summary": "Dùng encoder/representation cho nhiều modalities trong cùng hệ thống.",
      "why": "AI hiện đại vượt ra ngoài text: perception và generation có thể được kết hợp.",
      "how": "Ảnh có thể được tách patches; audio thường thành frames/tokens; model hợp nhất biểu diễn theo nhiều kiến trúc khác nhau. Một số mô hình dùng transformer backbone, nhưng chi tiết không đồng nhất.",
      "example": "Screenshot lỗi UI + mô tả → model đọc bố cục và đề xuất sửa CSS.",
      "misconception": "Không phải cứ nhận được ảnh thì model hiểu mọi pixel chính xác.",
      "prerequisites": [
        "transformer"
      ],
      "related": [
        "tokenization"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "moe",
      "group": "frontier",
      "title": "Mixture-of-Experts (MoE)",
      "level": "Đào sâu",
      "minutes": 10,
      "summary": "Router chọn tập con experts cho mỗi token/nhóm token.",
      "why": "MoE cho phép nhiều tham số tổng nhưng lượng tính toán active/token thấp hơn dense model tương đương số tham số tổng.",
      "how": "Một gating network tạo score cho experts; top-k experts xử lý activation rồi kết hợp đầu ra. Cần cân bằng tải, communication và kỹ thuật training để tránh expert collapse.",
      "example": "Tổng 100B params nhưng chỉ một phần được kích hoạt trong một lượt tính — ví dụ minh họa, không phải model cụ thể.",
      "misconception": "Số params tổng không tương đương compute/token hay chất lượng.",
      "prerequisites": [
        "transformer",
        "scaling"
      ],
      "related": [
        "kv-cache"
      ],
      "sources": [
        {
          "label": "MOE",
          "url": "https://arxiv.org/abs/1701.06538"
        }
      ],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    },
    {
      "id": "open-questions",
      "group": "frontier",
      "title": "Những câu hỏi còn mở của AI",
      "level": "Đào sâu",
      "minutes": 9,
      "summary": "Factuality, generalization, interpretability, safety, cost.",
      "why": "Học AI hiệu quả còn là biết điều gì chưa chắc chắn và điều gì cần thử nghiệm.",
      "how": "Nhiều năng lực chưa có thước đo đầy đủ; real-world agent reliability phụ thuộc cả model, tools, environment và human oversight. Interpretability, training data governance và safety là các lĩnh vực nghiên cứu tích cực.",
      "example": "Trước khi tin một agent, đo hiệu quả trên bộ tasks thật và thử adversarial cases.",
      "misconception": "Không nên suy từ câu trả lời mạch lạc ra mức độ hiểu hoặc tính chính xác tuyệt đối.",
      "prerequisites": [
        "evals"
      ],
      "related": [
        "reasoning",
        "security"
      ],
      "sources": [],
      "exercise": "Tự giải thích lại khái niệm này bằng 3 câu, không dùng từ chuyên môn."
    }
  ],
  "timeline": [
    {
      "year": "1943",
      "name": "McCulloch–Pitts neuron",
      "desc": "Mô hình neuron logic đặt một phần nền tảng toán học cho neural networks.",
      "topic": "ai-history",
      "lane": "Neural"
    },
    {
      "year": "1950",
      "name": "Turing & “imitation game”",
      "desc": "Đặt câu hỏi máy có thể thể hiện hành vi thông minh đến đâu.",
      "topic": "ai-history",
      "lane": "Foundations"
    },
    {
      "year": "1956",
      "name": "Dartmouth workshop",
      "desc": "Artificial Intelligence trở thành một chương trình nghiên cứu có tên gọi rõ ràng.",
      "topic": "symbolic",
      "lane": "Symbolic"
    },
    {
      "year": "1958",
      "name": "Perceptron",
      "desc": "Mô hình học tuyến tính sớm, trước làn sóng deep learning rất lâu.",
      "topic": "neural-network",
      "lane": "Neural"
    },
    {
      "year": "1970s",
      "name": "Expert systems",
      "desc": "Rule-based systems phát triển mạnh trong một số miền chuyên môn.",
      "topic": "expert-systems",
      "lane": "Symbolic"
    },
    {
      "year": "1980s",
      "name": "Backprop & AI winters",
      "desc": "Mạng nhiều tầng được nghiên cứu mạnh hơn trong bối cảnh đầu tư AI lên xuống theo chu kỳ.",
      "topic": "gradient",
      "lane": "Neural"
    },
    {
      "year": "1997",
      "name": "Deep Blue",
      "desc": "Chess search & engineering thể hiện sức mạnh của AI không phụ thuộc LLM.",
      "topic": "symbolic",
      "lane": "Symbolic"
    },
    {
      "year": "2012",
      "name": "AlexNet / ImageNet",
      "desc": "Deep CNN + GPU tạo bước ngoặt cho nhận dạng ảnh.",
      "topic": "deep-learning",
      "lane": "Neural"
    },
    {
      "year": "2016",
      "name": "AlphaGo",
      "desc": "Deep networks kết hợp Monte Carlo tree search và reinforcement learning.",
      "topic": "deep-learning",
      "lane": "Neural"
    },
    {
      "year": "2017",
      "name": "Transformer",
      "desc": "Attention Is All You Need; nền tảng cho các kiến trúc ngôn ngữ quy mô lớn.",
      "topic": "transformer",
      "lane": "LLM"
    },
    {
      "year": "2018",
      "name": "GPT-1 & BERT",
      "desc": "Pretraining transformer trở thành hướng tiếp cận quan trọng của NLP.",
      "topic": "pretraining",
      "lane": "LLM"
    },
    {
      "year": "2020",
      "name": "GPT-3 & RAG paper",
      "desc": "Scaling LLM cùng việc kết nối truy xuất tri thức ngoài model.",
      "topic": "rag",
      "lane": "Systems"
    },
    {
      "year": "2022",
      "name": "InstructGPT, ChatGPT, ReAct",
      "desc": "Instruction-following, hội thoại và tool-using agent được chú ý rộng rãi.",
      "topic": "sft",
      "lane": "Systems"
    },
    {
      "year": "2023",
      "name": "DPO & coding assistants",
      "desc": "Preference tuning và ứng dụng LLM vào developer workflows tiếp tục phát triển.",
      "topic": "rlhf",
      "lane": "Systems"
    },
    {
      "year": "2024–2026",
      "name": "Reasoning, multimodal & agents",
      "desc": "Tiến bộ rộng trên inference-time compute, multimodal và hệ thống có tool; không phải một kiến trúc duy nhất.",
      "topic": "reasoning",
      "lane": "Systems"
    }
  ],
  "tracks": [
    {
      "id": "engineer",
      "title": "Engineer-first",
      "subtitle": "Bắt đầu từ Codex/Claude Code rồi đào xuống LLM",
      "accent": "#b7efab",
      "duration": "~3–4 tuần",
      "path": [
        "ai-vs-ml",
        "tool-calling",
        "agent-loop",
        "context-engineering",
        "rag",
        "tokenization",
        "attention",
        "transformer",
        "causal-lm",
        "pretraining",
        "sft",
        "evals",
        "security"
      ]
    },
    {
      "id": "inside",
      "title": "Inside-out LLM",
      "subtitle": "Từ vector/gradient tới transformer và training",
      "accent": "#c3b2ff",
      "duration": "~4–5 tuần",
      "path": [
        "vectors",
        "probability",
        "loss",
        "gradient",
        "neural-network",
        "tokenization",
        "embedding",
        "positional",
        "attention",
        "transformer",
        "causal-lm",
        "sampling",
        "pretraining",
        "training-loop",
        "rlhf"
      ]
    },
    {
      "id": "history",
      "title": "History-first",
      "subtitle": "Đi theo thời gian để hiểu các bước ngoặt",
      "accent": "#f2cc81",
      "duration": "~2–3 tuần",
      "path": [
        "ai-history",
        "symbolic",
        "expert-systems",
        "statistical-ml",
        "deep-learning",
        "transformer-era",
        "transformer",
        "pretraining",
        "agent-loop"
      ]
    }
  ]
};
