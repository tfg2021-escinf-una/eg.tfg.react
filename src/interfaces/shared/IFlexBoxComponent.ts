type JustifyFlex = 
  | 'flex-start'
  | 'center'
  | 'flex-end'

type AlignFlex = 
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

type DirFlex = 
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'

export interface IFlexBoxComponent {
  justify?: JustifyFlex,
  align?: AlignFlex,
  alignItems?: AlignFlex,
  direction?: DirFlex
}
