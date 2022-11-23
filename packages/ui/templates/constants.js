const IconPropsInterfaceTpl = `
interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}`;

const HuoIconInterfaceTpl = `
type HuoIcon = FC<HuoIconProps>`;

module.exports = { IconPropsInterfaceTpl, HuoIconInterfaceTpl };
