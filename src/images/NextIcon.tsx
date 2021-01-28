
const NextIcon = ({active = true}) => {
    return (
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={active ? 'white' : `#FC606B`} fill-rule="evenodd" clip-rule="evenodd" d="M0.211956 1.16452C-0.0640883 0.904566 -0.0703041 0.495259 0.192158 0.228158C0.334337 0.0836792 0.53767 -9.74493e-07 0.752995 -9.8283e-07C0.957289 -9.90741e-07 1.15172 0.0751094 1.29345 0.208296L8.78763 7.05127C8.92876 7.1842 9 7.35814 9 7.52957C9 7.70104 8.92916 7.87455 8.78802 8.00745L1.29415 14.8501C0.988953 15.137 0.481977 15.1257 0.192287 14.8311C-0.0703341 14.5639 -0.0641135 14.1545 0.211991 13.8945L7.19895 7.52957L0.211956 1.16452Z" />
        </svg>
    )
}

export default NextIcon

