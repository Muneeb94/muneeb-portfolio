/** Static stat number (7 / 10 / 2). No animation. */
export default function CountUp({ to }: { to: number }) {
  return <span className="count">{to}</span>;
}
