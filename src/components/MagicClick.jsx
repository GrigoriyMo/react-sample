
function MagicClick({ updateMagic }) {
  const handleClick = () => {
    updateMagic();
  }
  return <input type="button" onClick={handleClick} value="Update" />

}

export default MagicClick