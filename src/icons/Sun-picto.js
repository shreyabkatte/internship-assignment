const SunPictoIcon = ({ width, height, fill }) => {
    return (
        <svg width={width ? width :"35"} height={height ?height:"35"} viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.3 22.75H44.8M0 22.75H10.5" stroke="#F2F2F2" stroke-width="2.5" />
            <path d="M30.5545 30.9039L37.9792 38.3285M6.30078 6.65015L13.7254 14.0748" stroke="#F2F2F2" stroke-width="2.5" />
            <path d="M30.5545 14.0744L37.9792 6.64974M6.30078 38.3281L13.7254 30.9035" stroke="#F2F2F2" stroke-width="2.5" />
            <circle cx="22.3996" cy="22.7502" r="8.55" stroke="#F2F2F2" stroke-width="2.5" />
            <path d="M22.4004 11.2V0M22.4004 45.5V34.3" stroke="#F2F2F2" stroke-width="2.5" />
        </svg>
    )
}

export default SunPictoIcon
