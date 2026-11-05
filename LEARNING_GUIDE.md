# Learning guide (for a developer using coding agents)

The best order for this audience is **systems-first → internal mechanisms → training → history**. Avoid treating all items as equally important.

## Suggested four-week plan

**Week 1 — Understand your existing tools.** Study `tool-calling`, `agent-loop`, `context-engineering`, `rag`, `workflows`, and `security`. Draw a sequence diagram showing who executes a tool call and who validates a tool result. Build a five-tool toy agent with a strict allowlist and explicit stop condition.

**Week 2 — Follow one token.** Study `tokenization`, `embedding`, `vectors`, `probability`, `attention`, `positional`, `transformer`, `causal-lm`, `sampling`, and `kv-cache`. On paper, explain one decoder-only next-token generation pass. Use the Playground and then implement softmax in Python or JavaScript.

**Week 3 — Learn how weights are learned.** Study `supervised`, `loss`, `gradient`, `neural-network`, `pretraining`, `training-loop`, `sft`, `rlhf`, and `lora`. Implement SGD on linear regression, then a tiny neural network. Distinguish SFT, preference tuning, RAG, and in-context examples.

**Week 4 — Connect the historical and production picture.** Study `ai-history`, `symbolic`, `expert-systems`, `statistical-ml`, `deep-learning`, `transformer-era`, `reasoning`, and `evals`. Make a timeline with two *simultaneous* branches and design a small benchmark for your coding agent.

## Five questions to test whether you understand the core

1. What actually changes when you edit the prompt versus when you fine-tune the model?
2. Why can a tokenizer split one natural-language word into several tokens?
3. What are Q, K and V, and why does a causal mask matter?
4. Who executes a `run_tests` tool call, and why must it be authorized by code?
5. If your RAG assistant hallucinates, how do you determine whether retrieval or generation is to blame?

## Learning principle

For each topic, do three things: **explain it**, **draw its input/output**, and **build or measure one minimal example**. Mark it complete only after you can do these without reading the description.