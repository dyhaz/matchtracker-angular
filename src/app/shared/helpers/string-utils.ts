export default class StringUtils {
  static truncate(val: string, length: number) {
    return val.length > length ? `${val.substring(0, length)}…` : val;
  }
}
