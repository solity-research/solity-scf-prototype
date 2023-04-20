import { HorizonLinkType } from "@solity/types/Horizon";

export default function extractEndpointFromLink(link: HorizonLinkType) {
  const initial = link.href.split("/").slice(3);

  if (link.templated) {
    const last = initial[initial.length - 1];
    initial[initial.length - 1] = last.slice(0, last.indexOf("{"));
  }

  return initial.join("/");
}
