import './PushNotification.css';

export default function PushNotification({
  appName,
  appLogoSrc,
  timeAgo,
  title,
  body,
  ...props
}) {
  return (
    <div className="push-notification" role="listitem" {...props}>
      <div className="push-notification__header">
        {appLogoSrc && (
          <img
            className="push-notification__logo"
            src={appLogoSrc}
            alt=""
            aria-hidden="true"
          />
        )}
        <span className="push-notification__app">{appName}</span>
        <span className="push-notification__time">{timeAgo}</span>
      </div>
      <p className="push-notification__title">{title}</p>
      <p className="push-notification__body">{body}</p>
    </div>
  );
}
