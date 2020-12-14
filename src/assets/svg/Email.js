import * as React from "react"

function Email(props) {
  return (
    <svg {...props} width={25} height={25} viewBox="0 0 25 25" fill="none">
      <path d="M17.543 8.036H7.457l5.043 4.323 5.043-4.323z" fill="#303960" />
      <path
        d="M12.5 13.393a.446.446 0 01-.29-.108L6.695 8.56v8.404h11.608V8.56l-5.513 4.725a.446.446 0 01-.291.108z"
        fill="#303960"
      />
      <path
        d="M12.5 0C5.596 0 0 5.596 0 12.5S5.596 25 12.5 25 25 19.404 25 12.5C24.992 5.6 19.4.008 12.5 0zm6.696 17.41c0 .247-.2.447-.446.447H6.25a.446.446 0 01-.446-.446V7.589c0-.246.2-.446.446-.446h12.5c.247 0 .446.2.446.446v9.822z"
        fill="#303960"
      />
    </svg>
  )
}

export default Email