export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v256H0zM128 0h64v256h-64zM64 96h64v64H64zM320 0h192v64H320zM256 64h64v128h-64zM320 192h192v64H320zM384 128h128v64H384z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M0 0h32v128H0zM64 0h32v128H64zM32 48h32v32H32zM160 0h96v32h-96zM128 32h32v64h-32zM160 96h96v32h-96zM192 64h64v32h-64z"/></svg>`
}
