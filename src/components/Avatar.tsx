type AvatarProps = { src: string; width: number;};

const Avatar: React.FC<AvatarProps> = ({ src, width }) => {

  const style: React.CSSProperties = {
    borderRadius: `50%`,
    width: width,
    height: width,
    objectFit: `cover`,
    border: `1px solid #fff`,
    cursor: `pointer`
  }

  return (
    <div>
      <img src={src} alt="user-avatar" style={style} />
    </div>
  );
};

export default Avatar;
