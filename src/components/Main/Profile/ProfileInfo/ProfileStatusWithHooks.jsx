import React, { useEffect, useState } from "react";
import style from './ProfileInfo.module.css';

export const ProfileStatusWithHooks = React.memo((props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		if (props.autorizedUserId === props.currentUserPofileId) setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateUserStatusTC(status);
	}
	const onUserStatusChange = (event) => {
		setStatus(event.currentTarget.value)
	}


	return (
		<div className={style.profileStatus} >
			{!editMode &&
				<div>
					<span
						onDoubleClick={activateEditMode}
					>{status || 'No status'}</span>
				</div>
			}
			{editMode &&
				<div>
					<input
						onChange={onUserStatusChange}
						autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>
			}
		</div>
	)
});