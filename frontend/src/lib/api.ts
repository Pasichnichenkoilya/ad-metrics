import axios from "axios";
import { AdMetrics } from "./types";

export async function fetchAdMetrics(): Promise<AdMetrics[]> {
  const metrics = await axios.get("http://localhost:8080/metrics/ads");
  return metrics.data;
}

export async function fetchAdMetricsById(id: string): Promise<AdMetrics> {
  const metrics = await axios.get(`http://localhost:8080/metrics/ads/${id}`);
  return metrics.data;
}

export async function updateAdMetrics(
  adMetrics: AdMetrics,
): Promise<AdMetrics> {
  const response = await axios.put(
    `http://localhost:8080/metrics/ads`,
    adMetrics,
  );
  return response.data;
}

export async function createAdMetrics(
  adMetrics: AdMetrics,
): Promise<AdMetrics> {
  const response = await axios.post(
    `http://localhost:8080/metrics/ads`,
    adMetrics,
  );
  return response.data;
}
