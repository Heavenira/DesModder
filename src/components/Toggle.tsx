import DCGView from "DCGView";
import "./Toggle.less";

export default class Toggle extends DCGView.Class<{
  toggled(): boolean;
  disabled(): boolean;
  onChange(): void;
}> {
  template() {
    return (
      <div
        class={() => ({
          "dcg-toggle-view": true,
          "dcg-toggled": this.props.toggled(),
          "desmodder-disabled-toggle": this.props.disabled(),
        })}
        onTap={() => this.props.onChange()}
      >
        <div class="dcg-toggle-switch" />
      </div>
    );
  }
}
