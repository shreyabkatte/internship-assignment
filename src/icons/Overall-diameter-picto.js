const OverallDiameterIcon = ({ width, height, fill }) => {
    return (
        <svg width={width ? width :"25"} height={height ? height :"25"} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="11.5" stroke="#F2F2F2" stroke-width="2" stroke-dasharray="6 6" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5H23C23 18.299 18.299 23 12.5 23C6.70101 23 2 18.299 2 12.5C2 6.70101 6.70101 2 12.5 2V0Z" fill="#F2F2F2" />
        </svg>
    )
}

export default OverallDiameterIcon
