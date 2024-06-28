import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 1/25/24) -----------------------------

// GPT-4 Turbo (UPDATED 1/25/24)
const GPT4Turbo: LLM = {
  modelId: "gpt-4-turbo",
  modelName: "ChatGPT 4o",
  provider: "openai",
  hostedId: "gpt-4-turbo",
  description:
    "GPT-4 Turbo Preview is a powerful language model that is designed to generate human-like text.",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  paid: false,
  tools: true,
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10,
    outputCost: 30
  }
}

// GPT-3.5 Turbo (UPDATED 1/25/24)
const GPT3_5Turbo: LLM = {
  modelId: "gpt-3.5-turbo",
  modelName: "ChatGPT 3.5",
  provider: "openai",
  hostedId: "gpt-3.5-turbo-0125",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  tools: true,
  supportsStreaming: true,
  paid: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 1.5
  }
}

const GPT4O: LLM = {
  modelId: "gpt-4o",
  modelName: "AFTA",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  tools: true,
  supportsStreaming: true,
  paid: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5.0,
    outputCost: 15.0
  }
}

export const OPENAI_LLM_LIST: LLM[] = [GPT4Turbo, GPT3_5Turbo, GPT4O]
