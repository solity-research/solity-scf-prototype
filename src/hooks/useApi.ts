import ApiService from "@solity/services/ApiService";
import { AxiosError } from "axios";
import { DependencyList, useEffect, useState } from "react";

export default function useApi<ResponseBody = any>(
  endpoint: string,
  deps: DependencyList = []
) {
  const [data, setData] = useState<ResponseBody>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    ApiService.get(endpoint)
      .then((res) => {
        setData(res);
        setError(undefined);
      })
      .catch((e) => {
        setError(e);
        setData(undefined);
      })
      .finally(() => setLoading(false));
  }, [endpoint, ...deps]);

  return { loading, data, error };
}
