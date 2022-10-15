import IconCopy from './icons/IconCopy'

const PreCode = ({ code = "", prefix = "$" }) => {
  const clickOnCopy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="mockup-code">
      <p className='absolute right-3 top-4 cursor-pointer' onClick={clickOnCopy}><IconCopy /></p>
      <pre data-prefix={prefix}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default PreCode