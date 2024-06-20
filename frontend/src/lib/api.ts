import axios from "axios";
import { AdMetrics } from "./types";

export async function fetchAdMetrics(): Promise<AdMetrics[]> {
  await new Promise((res) => setTimeout(res, 3000));
  const metrics = await axios.get("http://localhost:8080/metrics/ads");
  return metrics.data;
}

export async function fetchFilteredMetrics() {
    
}