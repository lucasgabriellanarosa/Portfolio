import { IoDocumentTextOutline, IoHomeOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { CiFolderOn, CiMail } from 'react-icons/ci';

export const NavItem = ({ section }) => {
    const renderIcon = () => {
        switch (section) {
            case 'Home':
                return <IoHomeOutline />;
            case 'About':
                return <GoPerson />;
            case 'Experience':
                return <IoDocumentTextOutline />;
            case 'Projects':
                return <CiFolderOn />;
            case 'Contacts':
                return <CiMail />;
            default:
                return null;
        }
    };
    return (
        <li className='flex flex-row items-center gap-2 text-xl hover:text-black hover:cursor-pointer'>
            {renderIcon()}
            <a href={section}>{section}</a>
        </li>
    )
}
