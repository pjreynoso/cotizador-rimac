
const BackIcon = ({active = true }) => {
    return (
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={active ? 'white' : `#FC606B`} fill-rule="evenodd" clip-rule="evenodd" d="M8.78804 13.8943C9.06409 14.1543 9.0703 14.5636 8.80784 14.8307C8.66566 14.9751 8.46233 15.0588 8.247 15.0588C8.04271 15.0588 7.84828 14.9837 7.70655 14.8505L0.212366 8.00755C0.0712372 7.87462 6.17067e-07 7.70068 6.2456e-07 7.52925C6.32055e-07 7.35778 0.0708405 7.18428 0.211979 7.05138L7.70585 0.208698C8.01105 -0.0782042 8.51802 -0.0668889 8.80771 0.227771C9.07033 0.494898 9.06411 0.904318 8.78801 1.1643L1.80105 7.52925L8.78804 13.8943Z" />
        </svg>
    )
}


export default BackIcon