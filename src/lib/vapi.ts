import Vapi from "@vapi-ai/web";

// Check if environment variables are available
if (!process.env.NEXT_PUBLIC_VAPI_API_KEY) {
  console.error("NEXT_PUBLIC_VAPI_API_KEY is not defined");
}

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);