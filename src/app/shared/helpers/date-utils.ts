export default class DateUtils {
  static timeDiff(from: string): string {
    const today = new Date();
    const dateFrom = new Date(from);
    return Array(3)
      .fill([3600, today.getTime() - dateFrom.getTime()])
      .map((v, i, a) => {
        a[i + 1] = [a[i][0] / 60, ((v[1] / (v[0] * 1000)) % 1) * (v[0] * 1000)];
        return `0${Math.floor(v[1] / (v[0] * 1000))}`.slice(-2);
      }).join(':');
  }
}
