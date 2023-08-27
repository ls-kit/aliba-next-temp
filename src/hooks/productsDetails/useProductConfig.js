import {useState} from 'react'
import _ from 'lodash'

const useProductConfig = () => {
    const [colorType, setColorType] = useState()
    const [attributes, setAttributes] = useState()
    const [configuredItems, setConfiguredItems] = useState()
    // console.log(colorType)
    const colorProp =[]
    const sizeProp = []
    const itemsConfigured = []

    


    const colorTypes = (colorProp) => {
        // console.log(colorProp)
        setColorType(colorProp)
        configuredItems?.filter(configItem => {
            console.log(configItem)
            console.log(_.isEqual(configItem.Configurators.included(colorType)))
        })
        
    }
    
    const productConfig = async (Attributes, ConfiguredItems) => {
        setAttributes(Attributes)
        setConfiguredItems(ConfiguredItems)
    }
    // console.log(attributes, configuredItems)
    // console.log(colorType)
    
    // console.log(configItems)
        const itemsConfig =  attributes?.filter(attr => attr.IsConfigurator === true)
        // console.log(itemsConfig)
    
        itemsConfig?.map(itemConfig => {
            if (itemConfig.PropertyName === 'Color') {
                colorProp.push(itemConfig)
                
            }
            if (itemConfig.PropertyName === 'Size') {
                sizeProp.push(itemConfig)
            }
            
        })
        // console.log(colorProp, sizeProp)
        
        // console.log(configuredItems)
        
       

    
    
    return {productConfig,
            colorTypes,
            colorType};
};

export default useProductConfig;