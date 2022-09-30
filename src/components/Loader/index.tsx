import HashLoader from "react-spinners/HashLoader"
import { LoaderContainer } from './Loader.styled'

const Loader = () => {
  return (
    <LoaderContainer>
      <HashLoader
        color="#a2c8fa"
        size={70}
        speedMultiplier={1.5}
      />
    </LoaderContainer>
  )
}

export default Loader