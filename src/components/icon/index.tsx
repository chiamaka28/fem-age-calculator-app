type ArrowIconProps = React.SVGProps<SVGSVGElement>;

export const ArrowIcon = (props: ArrowIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='46'
      height='44'
      viewBox='0 0 46 44'
      className='w-7'
    >
      <g fill='none' stroke='#FFF' strokeWidth='2'>
        <path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
      </g>
    </svg>
  );
};
