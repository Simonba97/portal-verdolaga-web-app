
const HeaderCard = ({ textHeader }: { textHeader: string }) => {
    return (
        <div className='bg-green-400 w-full text-sm italic py-1 tracking-wide text-center text-gray-100'>
            <span>{textHeader}</span>
        </div>
    )
}

export default HeaderCard