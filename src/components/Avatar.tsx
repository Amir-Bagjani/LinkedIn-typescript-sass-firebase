type AvatarProps = { src: string; width: number; borderColor?: string };

const Avatar: React.FC<AvatarProps> = ({ src, width }) => {
  return (
    <div>
      <img
        src={src}
        alt="user-avatar"
        style={{
          borderRadius: `50%`,
          width: width,
          height: width,
          objectFit: `cover`,
          border: `1px solid #fff`,
          cursor: `pointer`
        }}
      />
    </div>
  );
};

export default Avatar;
