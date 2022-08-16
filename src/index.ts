import { Plugin } from "release-it";
import type { IncrementOptions } from "release-it";
import calver from "calver";

const DEFAULT_FORMAT = "yyyy.mm.minor";
const DEFAULT_LEVEL = "calendar";

class CalverPlugin extends Plugin {
  getFormat() {
    return (this.getContext()["format"] as string) ?? DEFAULT_FORMAT;
  }

  getLevel() {
    return (this.getContext()["level"] as string) ?? DEFAULT_LEVEL;
  }

  override getIncrementedVersion(options: IncrementOptions) {
    const { latestVersion } = options;
    return calver.inc(this.getFormat(), latestVersion, this.getLevel());
  }

  override getIncrementedVersionCI(options: IncrementOptions) {
    return this.getIncrementedVersion(options);
  }

  override getIncrement(options: IncrementOptions) {
    return this.getIncrementedVersion(options);
  }
}

export default CalverPlugin;
