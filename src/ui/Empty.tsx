interface Props {
  resource?: string | undefined
}

function Empty({ resource }: Props) {
  return <p>No {resource} could be found.</p>;
}

export default Empty;
