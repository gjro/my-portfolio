import * as React from "react";

function SvgExternIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.313 25H3.125A3.125 3.125 0 010 21.875V4.687a3.125 3.125 0 013.125-3.125h6.25v3.125h-6.25v17.188h17.188v-6.25h3.125v6.25A3.125 3.125 0 0120.313 25zm-8.282-9.833l-2.203-2.21 9.833-9.832h-5.599V0H25v10.938h-3.125V5.335l-9.844 9.831z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExternIcon;
