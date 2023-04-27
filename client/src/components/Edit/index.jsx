import './edit.scss';

export const Edit = ({ data, remove, edit }) => (
    <div className='edit'>
        <button className='edit__button' type='button' onClick={() => edit(data)}>
            <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M18.75 2.08337L22.9167 6.25004'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M7.81242 21.3542L19.7916 9.37504L15.6249 5.20837L3.64575 17.1875L2.08325 22.9167L7.81242 21.3542Z'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </button>
        <button className='delete__button' type='button' onClick={() => remove(data)}>
            <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M3.125 6.25H21.875'
                    stroke='#FF1800'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M19.7916 6.25V20.8333C19.7916 21.875 18.7499 22.9167 17.7083 22.9167H7.29159C6.24992 22.9167 5.20825 21.875 5.20825 20.8333V6.25'
                    stroke='#FF1800'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M8.33325 6.25004V4.16671C8.33325 3.12504 9.37492 2.08337 10.4166 2.08337H14.5833C15.6249 2.08337 16.6666 3.12504 16.6666 4.16671V6.25004'
                    stroke='#FF1800'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M10.4167 11.4584V17.7084'
                    stroke='#FF1800'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M14.5833 11.4584V17.7084'
                    stroke='#FF1800'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </button>
    </div>
);
