declare module "release-it" {
  export interface IncrementOptions {
    latestVersion: string;
  }

  export class Plugin {
    getContext: () => Record<string, unknown>;
    setContext: (context: Record<string, unknown>) => void;
    getIncrement(options: IncrementOptions): string;
    getIncrementedVersion(options: IncrementOptions): string;
    getIncrementedVersionCI(options: IncrementOptions): string;
  }
}
