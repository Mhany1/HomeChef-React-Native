import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Footer from './footer';
import Logout from './Logout';


const image = { uri: "https://cdn.optimizely.com/img/8422644581/23e35a369d9249fe9f310dbef0cffdf8.png" };
// const image1 = { uri: "https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Frationale%2Fflowers-767bb488b38d9e54b45f5c0e6333178050a6c532058b9375d8961e2deefed231.png?ixlib=rails-1.1.0&w=328&s=916ad7d8bac0f2990ff051db1174e607" };



const Home = ({navigation}) =>{
 
    
  return (
    
    <ScrollView>
     <Button style={{width:'100%'}} title='Logout' color='#008600' onPress={()=>navigation.reset({
                  index: 0,
                  routes: [{ name: 'StartScreen' }],
             })}/>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Meet Home Chef</Text>
        <View style={[{ width: "40%", margin: 'auto', borderRadius: 30, marginTop: -10, marginBottom: 10,padding:10 }]}>
        <Button onPress={()=>navigation.navigate('ProductsList')}
                    title="Our Menu"
                    color="#008600"
            />
        </View>
    </ImageBackground>
    <View>
        <Text style={styles.simplText}>Simplify Dinner</Text>
        <View style={styles.mainDiv}>
            <Icon name="crop" size={25} color="#008600" />
            <Text style={styles.mainDivTitle}>ENJOY</Text>
            <Text style={styles.mainDivP}>Effortlessly create and plate your meals in no time. Dinner is solved!</Text>
        </View>
        <View style={styles.mainDiv}>
            <Icon name="yelp" size={25} color="#008600" />
            <Text style={styles.mainDivTitle}>CUSTOMIZE IT</Text>
            <Text style={styles.mainDivP}>Use our Customize It feature to upgrade, swap, or double up proteins on select meals.</Text>
        </View>
        <View style={styles.mainDiv}>
            <Icon name="check-circle" size={25} color="#008600" />
            <Text style={styles.mainDivTitle}>SELECT</Text>
            <Text style={styles.mainDivP}>Carb conscious, calorie conscious, vegetarian – we’ve got lots of options to fit your schedule and diet.</Text>
        </View>
    </View>
    {/* <ImageBackground source={image1} resizeMode="cover" style={styles.image1}> */}
        <View style={styles.imageDive}>
            <Text style={styles.mainDivTitlekit}>More Than a Meal Kit</Text>
            <Text style={styles.mainDivTex}>Weekly recipe rotations for all skill levels and dietary preferences means there's always something new and exciting to cook.</Text>
        </View>
    {/* </ImageBackground> */}
    <View style={{marginTop:20}}>
        {/* <Image source={require('')} /> */}
        <Image
            source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Frationale%2Fpasta-bowl-1b281d27cc79caae8800b83b91eb941a0f00b58bd9b75d3ca6bd00090f2902dc.jpg?ixlib=rails-1.1.0&s=c9063a5d00a9e164832ac8f9a34a0832' }}
            style={styles.imgStyl}
        />
        <Text style={styles.mainDivTitlekit}>Make It Yours</Text>
        <Text style={styles.mainDivTex}>Make meals uniquely yours. Upgrade, double-up, add or swap protein on select meals. You’re in control of your dinstiny.*</Text>
        {/* <Text style={styles.mainDivText}>*dinstiny (n): a combination of dinner and destiny</Text> */}
        <View style={[{ width: "60%", margin: 'auto', borderRadius: 30, marginTop: 15,padding:10 }]}>
            {/* <Button
                title="Build Your Box"
                color="#008600"
            /> */}
        </View> 
    </View>
    {/* //////////////////// */}
    <View style={{marginTop:20}}>
        <Image
            source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Frationale%2Fchicken-and-veggies-02bcd8acebbf5c643a94fc4b2172d97e8e0f7b28a4d108cf8358609dcef404af.jpg?ixlib=rails-1.1.0&s=0fb03097ac84dcef21eb1e2c958af878' }}
            style={styles.imgStyl}
        />
        <Text style={styles.mainDivTitlekit}>Change It Up</Text>
        <Text style={styles.mainDivTex}>Add meals. Edit servings. Or take a week off and fly to Tahiti. Plans and preferences change  we keep up.</Text>
        <View style={[{ width: "60%", margin: 'auto', borderRadius: 30, marginTop: 15,padding:10 }]}>
            {/* <Button
                title="Plan Your First Week"
                color="#008600"
            /> */}
        </View> 
    </View>

    <View style={{marginTop:20}}>
        <Image
            source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Frationale%2Fsteak-and-tortilla-885f89b3eb240b79ac6578a69f397a42fde71f7de6f70aef6b4e4ba2491c512e.jpg?ixlib=rails-1.1.0&s=12cf9048dd7c02903fca8932333f393d' }}
            style={styles.imgStyl}
        />
        <Text style={styles.mainDivTitlekit}>Get Dinner Done</Text>
        <Text style={styles.mainDivTex}>If your routine isn’t quite “routine,” worry not. From 5-minute meals to 30+ minute masterpieces.</Text>
        <View style={{ width: "60%", margin: 'auto', borderRadius: 30, marginTop: 15,padding:10 }}>
            {/* <Button
                title="Dig In"
                color="#008600"
            /> */}
        </View> 
    </View>

    <View style={{backgroundColor: '#0C355B', minHeight: '18vh', width: '100%', flexDirection: 'row', justifyContent: 'space-around', padding: 7, marginTop: 15}}>
        <View style={{textAlign: 'center', marginTop: 15}}>
            <Text style={{fontSize: 24,fontWeight: 'bold', color: '#fff'}}>4M+</Text>
            <Text style={{fontSize: 19,fontWeight: 'bold', color: '#fff'}}>5-star reviews*</Text>
            <Text style={{fontSize: 12, color: 'gray'}}>Home Chef data 2014 - 2020</Text>
        </View>
        <View style={{textAlign: 'center', marginTop: 15}}>
            <Text style={{fontSize: 24,fontWeight: 'bold', color: '#fff'}}>200M+</Text>
            <Text style={{fontSize: 19,fontWeight: 'bold', color: '#fff'}}>Meals served*</Text>
            <Text style={{fontSize: 12, color: 'gray'}}>Home Chef Internal Report</Text>
        </View>
    </View>
    <View>
        <Text style={{fontSize: 25,fontWeight: 'bold', color: '#008600',textAlign: 'center', marginTop: 30}}>What’s On Your Menu</Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 15}}>
        <ImagedCarouselCard
            text={'Japanese BBQ Burger'}
            width={"100%"}
            height={200}
            shadowColor="#051934"
            source={{
            uri: "https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fwhats_on_your_menu%2Fadventurous%2Fjapanese-bbq-burger-fa652e09607b060e594c8d40e56e8b5eff285b14873e5ec01d088ff4235f4bcd.jpg?ixlib=rails-1.1.0&s=9154a1250c9fc972541280aa96c8cf57", 
            }}
        />
        
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 15}}>
        <ImagedCarouselCard
            text={'Korean Fried Chicken'}
            width={160}
            height={200}
            shadowColor="#051934"
            source={{
            uri: "https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fwhats_on_your_menu%2Fadventurous%2Fkorean-fried-chicken-dc0df58776ea2fafd8503c2b4b7acba6bc6e3bf2f73bc8ca50234ce797b115a6.jpg?ixlib=rails-1.1.0&s=36cf78e7d815f6e7242cc54a71d5cd35", 
            }}
        />
        <ImagedCarouselCard
            text={'Garlic-Parmesan Crusted Filet'}
            width={160}
            height={200}
            fontSize={6}
            shadowColor="#051934"
            source={{
            uri: "https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fwhats_on_your_menu%2Fadventurous%2Fgarlic-parmesan-crusted-filet-mignon-d016cb458d9bdbc61924ee4607d586acd4d2a463823f4b6dd520d21ae4e509b0.jpg?ixlib=rails-1.1.0&s=973dc45ea8032309dea292c9f372a5bb", 
            }}
        />
    </View>
    <View style={{textAlign:'center', padding: 10, marginTop:20}}>
        <Text style={{color: '#008600', fontSize: 25, fontWeight: 'bold'}}>Stay In the Know</Text>
        <Text style={{color: 'gray', fontSize: 18}}> Be the first to hear about special offers from Home Chef!</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-around', margin: 20}}>
        <Image
            source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Finstagram%2Fstarlord_benny-09d523324788605969746378ff928f4d1c9d58174f1a8c8854eff8479516c286.jpg?ixlib=rails-1.1.0&s=bba2290a52be13f407fe7504244c341f' }}
            style={styles.imginstgram}
        />
        <Image
            source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Finstagram%2Fsotrusty_1-f63ccdfb81f793df37e4e323af737aefe29d9024cb261993138560b4f25af82e.jpg?ixlib=rails-1.1.0&s=3de489a91dd3698de8ce31d03df52e6b' }}
            style={styles.imginstgram}
        />
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', margin: 10}}>
        <Image
            source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Finstagram%2Fshannoncocho-947dcff6cb9aaefc9e55dbbd299d043236250d744f1561ed68c9083cfc0524f3.jpg?ixlib=rails-1.1.0&s=279e7a4ef5347f7aaea6bc58bea3076c' }}
            style={styles.imginstgram}
        />
        <Image
            source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Finstagram%2Fredsolesandredwine-9a0f5fb09b0a841ea37d8ea2951873e2c5e89acd9bc8871bb0a30e8a1150d60d.jpg?ixlib=rails-1.1.0&s=8ffa4e2e79fd6a1f0d5b3754f318deaf' }}
            style={styles.imginstgram}
        />
        </View>
        <Footer style={{width:'100%'}}></Footer>
    </View>
   
</ScrollView>

);
};


const styles = StyleSheet.create({
image: {
    flex: 1,
    // justifyContent: "center",
    height: '100%',
    textAlign: 'center'
},
text: {
    color: "#008600",
    fontSize: 39,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: '#bfe1bf69',
    margin: '10%',
    marginTop: '10%'
},
simplText: {
    color: "#008600",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
    marginTop: 40
},
mainDiv: {
    textAlign: 'center',
    padding: 20
},
mainDivTitle: {
    color: '#404851',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
},
mainDivP: {
    color: '#404851',
    fontSize: 16,
    textAlign:'center'
},
imageDive: {
    backgroundColor: "#bfe1bf7e",
    padding: 40,
    marginTop: 30
},
mainDivTitlekit: {
    textAlign: 'center',
    color: "#008600",
    fontSize: 24,
    lineHeight: 25,
    fontWeight: "bold",
    padding: 16,
},
mainDivTex: {
    textAlign: 'center',
    color: '#404851',
    fontSize: 17,
    padding:10
},
imgStyl: {
    width: '80%',
    margin: 'auto',
    height: '30vh',
    marginTop: 10
},
// mainDivText: {
//     // textAlign: 'center',
//     color: '#404851',
//     fontSize: 19,
//     padding: 10
// },
imginstgram: {
    width: '46%',
    height: 200,
    borderRadius: 5
}
});

export default Home;
