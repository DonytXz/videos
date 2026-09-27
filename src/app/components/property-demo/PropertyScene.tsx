// Original vector artwork: self-contained, responsive, and available offline.
export default function PropertyScene({
  scene = "roma",
  detail = false,
}: {
  scene?: string;
  detail?: boolean;
}) {
  const garden = scene === "coyoacan";
  const urban = scene === "valle";
  return (
    <svg
      className={`property-scene ${detail ? "is-detail" : ""}`}
      viewBox="0 0 960 640"
      role="img"
      aria-label={
        garden
          ? "Ilustración de una sala con vista a un jardín"
          : urban
            ? "Ilustración de un departamento con vista a la ciudad"
            : "Ilustración de una sala abierta con ventanas y plantas"
      }
    >
      <rect width="960" height="640" fill={garden ? "#d6d7bb" : "#e9dfcd"} />
      <path d="M0 0H180V406L0 570Z" fill={urban ? "#8a9d99" : "#b9b49d"} />
      <path d="M180 406H960V640H0V570Z" fill="#b69c7b" />
      <path
        d="M180 406L960 620M180 406L360 640M180 406L25 640M180 475H960M96 552H960"
        stroke="#a68c6d"
        strokeWidth="2"
      />
      <rect x="510" y="58" width="354" height="358" fill="#514f43" />
      <rect
        x="520"
        y="68"
        width="334"
        height="338"
        fill={garden ? "#b4c6a1" : "#c8d4cb"}
      />
      {garden ? (
        <g fill="#789269">
          <circle cx="586" cy="185" r="76" />
          <circle cx="817" cy="248" r="98" />
          <circle cx="696" cy="145" r="45" />
          <path d="M520 338Q680 280 854 350V406H520Z" fill="#66815c" />
        </g>
      ) : (
        <g fill={urban ? "#9aa9a0" : "#b1baaa"}>
          <path d="M520 273H553V172H619V250H672V122H728V240H792V188H854V406H520Z" />
          <path
            d="M530 298H598V240H645V309H732V212H790V302H854V406H530Z"
            fill="#83978b"
          />
          {[565, 585, 682, 702, 805, 825].map((x) => (
            <path
              key={x}
              d={`M${x} 200v16m0 12v16m0 12v16`}
              stroke="#cfdbcf"
              strokeWidth="7"
            />
          ))}
        </g>
      )}
      <path
        d="M630 65V414M747 65V414M516 290H860"
        stroke="#514f43"
        strokeWidth="8"
      />
      <path d="M482 49H510V424H466Z M866 49H896L917 424H866Z" fill="#f3eddf" />
      <path d="M316 435L767 448L873 557L218 559Z" fill="#e5d4b6" />
      <path
        d="M334 450L777 464M303 483L807 497M268 520L842 533"
        stroke="#d6c3a2"
        strokeWidth="3"
      />
      <rect
        x="231"
        y="304"
        width="296"
        height="139"
        rx="20"
        fill={urban ? "#617974" : garden ? "#8c714e" : "#af7553"}
      />
      <rect
        x="217"
        y="367"
        width="325"
        height="99"
        rx="15"
        fill={urban ? "#718b80" : garden ? "#a38a60" : "#c48c63"}
      />
      <rect
        x="240"
        y="318"
        width="128"
        height="71"
        rx="13"
        fill={urban ? "#9bad98" : "#dbc3a1"}
      />
      <rect
        x="380"
        y="318"
        width="126"
        height="71"
        rx="13"
        fill={urban ? "#8d9c85" : "#c2a482"}
      />
      <rect
        x="205"
        y="351"
        width="39"
        height="102"
        rx="12"
        fill={urban ? "#546e65" : "#98704e"}
      />
      <rect
        x="516"
        y="351"
        width="39"
        height="102"
        rx="12"
        fill={urban ? "#546e65" : "#98704e"}
      />
      <path d="M239 462V480M526 462V480" stroke="#574a3a" strokeWidth="8" />
      <ellipse cx="623" cy="462" rx="110" ry="37" fill="#775a3f" />
      <path
        d="M557 462L551 530M682 464L700 527"
        stroke="#654d36"
        strokeWidth="11"
      />
      <ellipse cx="623" cy="454" rx="111" ry="36" fill="#c2a27b" />
      <path d="M585 447L622 431L657 449L620 465Z" fill="#eee8d6" />
      <ellipse cx="665" cy="438" rx="12" ry="7" fill="#6d7760" />
      <path d="M653 437L657 416H673L677 437" fill="#8d967a" />
      <path d="M318 57V136" stroke="#514b3d" strokeWidth="3" />
      <path d="M278 166Q278 114 318 114Q358 114 358 166Z" fill="#c4a571" />
      <ellipse cx="318" cy="166" rx="40" ry="9" fill="#f7e5b3" />
      <rect x="232" y="164" width="104" height="94" fill="#7c7561" />
      <rect x="239" y="171" width="90" height="80" fill="#e4d8bb" />
      <circle cx="287" cy="202" r="23" fill="#bc875c" />
      <path d="M239 251L277 214L305 251Z" fill="#7a8b70" />
      <path d="M814 468L826 528H872L884 468Z" fill="#a97c58" />
      <path
        d="M849 473V325M848 423Q797 415 788 359Q851 365 848 423M850 389Q898 383 912 330Q850 331 850 389M849 350Q818 331 824 291Q860 311 849 350"
        fill="#506f4f"
        stroke="#506f4f"
        strokeWidth="5"
      />
      <path
        d="M521 409L693 410L954 544L773 534Z"
        fill="#ffebbb"
        opacity=".18"
      />
    </svg>
  );
}
