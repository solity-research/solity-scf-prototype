export default function generateQueryString(
  params: Record<string, string | number>
) {
  let query: string[] = [];
  Object.keys(params).forEach((_k) => {
    const key = _k as keyof typeof params;
    if (params[key]) query.push([key, params[key]].join("="));
  });
  return "?" + query.join("&");
}
