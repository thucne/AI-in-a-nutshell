/* Topic metadata and learning paths. Detailed chapters live in content/chapters-*.js. */
window.AI_ATLAS_DATA = {
  "version": "1.1.0",
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
      "minutes": 12,
      "summary": "Ba nhánh chính đan xen: symbolic AI, thống kê và neural networks.",
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
      ]
    },
    {
      "id": "symbolic",
      "group": "history",
      "title": "1950s–1970s · Symbolic AI",
      "level": "Nhập môn",
      "minutes": 14,
      "summary": "Logic, search, biểu diễn tri thức và luật IF–THEN.",
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
      ]
    },
    {
      "id": "expert-systems",
      "group": "history",
      "title": "1970s–1980s · Expert systems & AI winters",
      "level": "Nhập môn",
      "minutes": 11,
      "summary": "Bùng nổ rule-based systems, rồi gặp giới hạn mở rộng và duy trì.",
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
      ]
    },
    {
      "id": "statistical-ml",
      "group": "history",
      "title": "1990s–2000s · Statistical ML",
      "level": "Nhập môn",
      "minutes": 13,
      "summary": "Học từ dữ liệu thay vì viết hết luật.",
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
      ]
    },
    {
      "id": "deep-learning",
      "group": "history",
      "title": "2012–2016 · Deep learning bứt phá",
      "level": "Cốt lõi",
      "minutes": 15,
      "summary": "Nhiều lớp mạng học features và GPU giúp huấn luyện ở quy mô lớn.",
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
      ]
    },
    {
      "id": "transformer-era",
      "group": "history",
      "title": "2017–nay · Transformer, LLM, Agent",
      "level": "Cốt lõi",
      "minutes": 14,
      "summary": "Transformer tăng khả năng song song hóa và mở đường cho scaling LLM.",
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
      ]
    },
    {
      "id": "ai-vs-ml",
      "group": "foundations",
      "title": "AI vs ML vs DL vs LLM",
      "level": "Nhập môn",
      "minutes": 8,
      "summary": "Bốn khái niệm ở các mức trừu tượng khác nhau.",
      "prerequisites": [],
      "related": [
        "supervised",
        "neural-network",
        "agent-loop"
      ],
      "sources": []
    },
    {
      "id": "supervised",
      "group": "foundations",
      "title": "Supervised, self-supervised & RL",
      "level": "Cốt lõi",
      "minutes": 12,
      "summary": "Ba cách xây tín hiệu học khác nhau.",
      "prerequisites": [],
      "related": [
        "loss",
        "pretraining",
        "rlhf"
      ],
      "sources": []
    },
    {
      "id": "vectors",
      "group": "foundations",
      "title": "Vector, matrix & representation",
      "level": "Cốt lõi",
      "minutes": 14,
      "summary": "Các mảng số là ngôn ngữ tính toán của neural networks.",
      "prerequisites": [],
      "related": [
        "embedding",
        "attention",
        "neural-network"
      ],
      "sources": []
    },
    {
      "id": "probability",
      "group": "foundations",
      "title": "Logits, softmax & xác suất",
      "level": "Cốt lõi",
      "minutes": 15,
      "summary": "Từ điểm số chưa chuẩn hóa thành phân phối dự đoán.",
      "prerequisites": [
        "vectors"
      ],
      "related": [
        "sampling",
        "loss"
      ],
      "sources": []
    },
    {
      "id": "loss",
      "group": "foundations",
      "title": "Loss & cross-entropy",
      "level": "Cốt lõi",
      "minutes": 14,
      "summary": "Đo mức sai lệch giữa dự đoán và target.",
      "prerequisites": [
        "probability"
      ],
      "related": [
        "gradient",
        "pretraining"
      ],
      "sources": []
    },
    {
      "id": "gradient",
      "group": "foundations",
      "title": "Gradient descent & backpropagation",
      "level": "Cốt lõi",
      "minutes": 17,
      "summary": "Dùng đạo hàm để điều chỉnh hàng triệu đến hàng tỷ tham số.",
      "prerequisites": [
        "loss",
        "vectors"
      ],
      "related": [
        "neural-network",
        "training-loop"
      ],
      "sources": []
    },
    {
      "id": "neural-network",
      "group": "foundations",
      "title": "Neuron, MLP & các lớp mạng",
      "level": "Cốt lõi",
      "minutes": 16,
      "summary": "Từ phép biến đổi tuyến tính đến function approximation.",
      "prerequisites": [
        "vectors",
        "gradient"
      ],
      "related": [
        "attention",
        "transformer"
      ],
      "sources": []
    },
    {
      "id": "tokenization",
      "group": "llm",
      "title": "Tokenization — text thành IDs",
      "level": "Cốt lõi",
      "minutes": 16,
      "summary": "LLM không trực tiếp đọc ký tự; input được chia thành token IDs.",
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
      ]
    },
    {
      "id": "embedding",
      "group": "llm",
      "title": "Embedding — IDs thành vectors",
      "level": "Cốt lõi",
      "minutes": 14,
      "summary": "Lookup một hàng của ma trận trọng số để biểu diễn token.",
      "prerequisites": [
        "tokenization",
        "vectors"
      ],
      "related": [
        "positional",
        "attention"
      ],
      "sources": []
    },
    {
      "id": "positional",
      "group": "llm",
      "title": "Position information — biết thứ tự",
      "level": "Cốt lõi",
      "minutes": 13,
      "summary": "Self-attention thuần không tự biết vị trí nếu thiếu thông tin thứ tự.",
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
      ]
    },
    {
      "id": "attention",
      "group": "llm",
      "title": "Self-attention — Query / Key / Value",
      "level": "Cốt lõi",
      "minutes": 24,
      "summary": "Mỗi token có thể kết hợp thông tin từ token khác theo trọng số.",
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
      ]
    },
    {
      "id": "transformer",
      "group": "llm",
      "title": "Transformer block — bên trong một layer",
      "level": "Cốt lõi",
      "minutes": 25,
      "summary": "Attention + MLP + residual + normalization, lặp nhiều tầng.",
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
      ]
    },
    {
      "id": "causal-lm",
      "group": "llm",
      "title": "Next-token prediction & causal mask",
      "level": "Cốt lõi",
      "minutes": 18,
      "summary": "Dự đoán token tiếp theo từ prefix đang có.",
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
      ]
    },
    {
      "id": "sampling",
      "group": "llm",
      "title": "Decoding — greedy, top-k, top-p, temperature",
      "level": "Cốt lõi",
      "minutes": 16,
      "summary": "Biến phân phối token thành một câu trả lời cụ thể.",
      "prerequisites": [
        "probability",
        "causal-lm"
      ],
      "related": [
        "context-window"
      ],
      "sources": []
    },
    {
      "id": "context-window",
      "group": "llm",
      "title": "Context window & in-context learning",
      "level": "Cốt lõi",
      "minutes": 16,
      "summary": "Những token model có thể xét trong một lần xử lý có giới hạn.",
      "prerequisites": [
        "tokenization",
        "causal-lm"
      ],
      "related": [
        "context-engineering",
        "rag",
        "kv-cache"
      ],
      "sources": []
    },
    {
      "id": "kv-cache",
      "group": "llm",
      "title": "KV cache & inference efficiency",
      "level": "Đào sâu",
      "minutes": 20,
      "summary": "Lưu Key/Value của prefix để tránh tính lại toàn bộ ở mỗi token.",
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
      ]
    },
    {
      "id": "reasoning",
      "group": "llm",
      "title": "Reasoning / test-time compute",
      "level": "Đào sâu",
      "minutes": 17,
      "summary": "Dùng thêm compute trong inference cho các bài cần nhiều bước.",
      "prerequisites": [
        "causal-lm"
      ],
      "related": [
        "agent-loop",
        "evals"
      ],
      "sources": []
    },
    {
      "id": "pretraining",
      "group": "training",
      "title": "Pretraining — học pattern từ corpus",
      "level": "Cốt lõi",
      "minutes": 18,
      "summary": "Tối ưu objective trên lượng lớn text/code và dữ liệu khác.",
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
      ]
    },
    {
      "id": "training-loop",
      "group": "training",
      "title": "Training loop: forward → loss → backward → update",
      "level": "Cốt lõi",
      "minutes": 22,
      "summary": "Gradient accumulation, batching, optimizer, validation, checkpoint.",
      "prerequisites": [
        "gradient",
        "pretraining"
      ],
      "related": [
        "sft",
        "lora"
      ],
      "sources": []
    },
    {
      "id": "sft",
      "group": "training",
      "title": "SFT — supervised instruction tuning",
      "level": "Cốt lõi",
      "minutes": 16,
      "summary": "Học phong cách trả lời theo ví dụ instruction → good response.",
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
      ]
    },
    {
      "id": "rlhf",
      "group": "training",
      "title": "RLHF, DPO & preference optimization",
      "level": "Đào sâu",
      "minutes": 20,
      "summary": "Điều chỉnh hành vi dựa trên phản hồi hoặc cặp ưu tiên.",
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
      ]
    },
    {
      "id": "lora",
      "group": "training",
      "title": "Fine-tuning, LoRA & adapters",
      "level": "Cốt lõi",
      "minutes": 16,
      "summary": "Thích nghi model với một domain/task bằng huấn luyện bổ sung.",
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
      ]
    },
    {
      "id": "scaling",
      "group": "training",
      "title": "Scaling laws & trade-offs",
      "level": "Đào sâu",
      "minutes": 17,
      "summary": "Model size, compute, data quantity/quality và inference budget.",
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
      ]
    },
    {
      "id": "prompts",
      "group": "agents",
      "title": "Prompting, instructions & structured outputs",
      "level": "Nhập môn",
      "minutes": 15,
      "summary": "Thiết kế input để model hiểu mục tiêu và contract đầu ra.",
      "prerequisites": [
        "context-window"
      ],
      "related": [
        "context-engineering",
        "security"
      ],
      "sources": []
    },
    {
      "id": "rag",
      "group": "agents",
      "title": "RAG — Retrieval Augmented Generation",
      "level": "Cốt lõi",
      "minutes": 21,
      "summary": "Đọc dữ liệu ngoài model tại thời điểm query.",
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
      ]
    },
    {
      "id": "tool-calling",
      "group": "agents",
      "title": "Tool/function calling",
      "level": "Cốt lõi",
      "minutes": 19,
      "summary": "Model đề xuất lời gọi công cụ; ứng dụng mới là bên thực thi.",
      "prerequisites": [
        "prompts"
      ],
      "related": [
        "agent-loop",
        "security"
      ],
      "sources": []
    },
    {
      "id": "agent-loop",
      "group": "agents",
      "title": "Agent loop — observe → decide → act → verify",
      "level": "Cốt lõi",
      "minutes": 23,
      "summary": "Orchestrator dùng LLM lặp giữa suy luận, hành động và kiểm chứng.",
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
      ]
    },
    {
      "id": "context-engineering",
      "group": "agents",
      "title": "Context engineering & memory",
      "level": "Cốt lõi",
      "minutes": 20,
      "summary": "Chọn đúng thông tin, đúng thời điểm, đúng thứ tự và đúng quyền.",
      "prerequisites": [
        "context-window",
        "rag",
        "tool-calling"
      ],
      "related": [
        "agent-loop",
        "kv-cache"
      ],
      "sources": []
    },
    {
      "id": "workflows",
      "group": "agents",
      "title": "Workflow vs autonomous agent",
      "level": "Cốt lõi",
      "minutes": 15,
      "summary": "Code-driven graph và model-driven loop giải quyết bài toán khác nhau.",
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
      ]
    },
    {
      "id": "evals",
      "group": "agents",
      "title": "Evaluation, tracing & observability",
      "level": "Cốt lõi",
      "minutes": 22,
      "summary": "Đo chất lượng của model và end-to-end system thay vì chỉ “trông có vẻ ổn”.",
      "prerequisites": [
        "tool-calling"
      ],
      "related": [
        "security",
        "agent-loop"
      ],
      "sources": []
    },
    {
      "id": "security",
      "group": "agents",
      "title": "Prompt injection, permissions & sandbox",
      "level": "Cốt lõi",
      "minutes": 23,
      "summary": "Không coi nội dung repo, web hoặc tool output là chỉ dẫn có thẩm quyền.",
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
      ]
    },
    {
      "id": "multimodal",
      "group": "frontier",
      "title": "Multimodal — ảnh, âm thanh, video",
      "level": "Đào sâu",
      "minutes": 15,
      "summary": "Dùng encoder/representation cho nhiều modalities trong cùng hệ thống.",
      "prerequisites": [
        "transformer"
      ],
      "related": [
        "tokenization"
      ],
      "sources": []
    },
    {
      "id": "moe",
      "group": "frontier",
      "title": "Mixture-of-Experts (MoE)",
      "level": "Đào sâu",
      "minutes": 18,
      "summary": "Router chọn tập con experts cho mỗi token/nhóm token.",
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
      ]
    },
    {
      "id": "open-questions",
      "group": "frontier",
      "title": "Những câu hỏi còn mở của AI",
      "level": "Đào sâu",
      "minutes": 15,
      "summary": "Factuality, generalization, interpretability, safety, cost.",
      "prerequisites": [
        "evals"
      ],
      "related": [
        "reasoning",
        "security"
      ],
      "sources": []
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
