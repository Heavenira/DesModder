import DCGView from 'DCGView'

export default class Toggle extends DCGView.Class {
  constructor (props: {
    toggled (): boolean,
    disabled (): boolean,
    onChange (): void
  }) {
    super(props)
  }

  template () {
    return (
      <div
        class={() => ({
          'dcg-toggle-view': true,
          'dcg-toggled': this.props.toggled()
        })}
        style={() => (
          this.props.disabled()
            ? {
                opacity: 0.3,
                cursor: 'not-allowed'
              }
            : {}
        )}
        onTap={() => this.props.onChange()}
      >
        <div class='dcg-toggle-switch' />
      </div>
    )
  }
}