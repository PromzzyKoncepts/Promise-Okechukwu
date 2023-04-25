import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: '9, ahmedtijani Str, Off Ahmadiyya Close, Lagos, Nigeria.',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'okechukwupromise638@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+234 701 289 7856',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="">
			<div className="contact-details">
				<h2 className="">
					Contact details
				</h2>
				<ul className="">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="cont-icon">
								{contact.icon}
							</i>
							<span className="">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
