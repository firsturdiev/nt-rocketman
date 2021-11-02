function ProfileModal({className, userName, ...props}) {
  return (
    <div className={'profile-modal ' + (className || '')} type="button">{userName}</div>
  )
}

export default ProfileModal;