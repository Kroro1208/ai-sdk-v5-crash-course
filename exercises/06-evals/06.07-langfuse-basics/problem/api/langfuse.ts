import { NodeSDK } from '@opentelemetry/sdk-node';
import Langfuse from 'langfuse';
import { LangfuseExporter } from 'langfuse-vercel';

/**
 * OpenTelemetryは、アプリの中で何が起きたか（どんな処理が実行されたか）を自動で記録するための仕組。
 * たとえば、どの機能が使われたか、どれくらい時間がかかったかなどを記録できる。
 * このファイルでは、その記録を外部サービス（Langfuse）に送るための準備と設定している。
 */
export const otelSDK = new NodeSDK({
  traceExporter: new LangfuseExporter(),
});

otelSDK.start();

export const langfuse = new Langfuse({
  environment: process.env.NODE_ENV,
  publicKey: process.env.LANGFUSE_PUBLIC_KEY,
  secretKey: process.env.LANGFUSE_SECRET_KEY,
  baseUrl: process.env.LANGFUSE_BASE_URL,
});
