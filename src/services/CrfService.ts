import { CustomRiskFrameworkType } from "@solity/types/CustomRiskFramework";
import { v4 as uuid } from "uuid";

const key = "solity-crf";

class CrfService {
  private _attachId(
    rf: Omit<CustomRiskFrameworkType, "id">
  ): CustomRiskFrameworkType {
    return { ...rf, id: uuid() };
  }

  get(): CustomRiskFrameworkType[] {
    try {
      const raw = localStorage.getItem(key);
      const rfs = raw ? JSON.parse(raw) : [];
      return rfs;
    } catch (e) {
      return [];
    }
  }

  find(id: string) {
    const rfs = this.get();
    return rfs.find((rf) => rf.id === id);
  }

  create(rf: Omit<CustomRiskFrameworkType, "id">) {
    const prev = this.get();
    const n = [...prev, this._attachId(rf)];
    localStorage.setItem(key, JSON.stringify(n));
    return rf;
  }

  createDefault() {
    this.create({
      modifiers: {
        overall: 1,
        liquidity: 1,
        security: 1,
        social: 1,
      },
      name: "My RF",
    });
  }

  delete(id: string) {
    const prev = this.get();
    const n = prev.filter((p) => p.id !== id);
    localStorage.setItem(key, JSON.stringify(n));
    return n.length === prev.length ? false : id;
  }

  update(rf: Partial<CustomRiskFrameworkType>) {
    if (!rf.id) return false;
    const found = this.find(rf.id);
    if (!found) return false;
    const updated = { ...found, ...rf };
    this.delete(updated.id);
    this.create(updated);
    return updated;
  }
}

export default CrfService;
