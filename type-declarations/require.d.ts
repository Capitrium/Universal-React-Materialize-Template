// based on http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/
interface NodeRequire {
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name?: string) => void;
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => string[];
}
