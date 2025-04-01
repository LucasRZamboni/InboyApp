import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MainMenuScreen = ({ navigation }) => {
  // Service categories with their respective icons
  const services = [
    [
      { id: "water", name: "Meus Dados", icon: "water-drop", color: "#29B6F6" },
      {
        id: "electricity",
        name: "Meus Bancos",
        icon: "lightbulb",
        color: "#FFC107",
      },
      {
        id: "internet",
        name: "Histórico",
        icon: "local-fire-department",
        color: "#FF5722",
      },
    ],
    [
      {
        id: "creditCard",
        name: "Fazer Saques",
        icon: "credit-card",
        color: "#E91E63",
      },
      {
        id: "transport",
        name: "Transporte",
        icon: "directions-bus",
        color: "#3F51B5",
      },
      {
        id: "cellphone",
        name: "Celular",
        icon: "smartphone",
        color: "#607D8B",
      },
    ],
    [
      { id: "home", name: "Casa", icon: "home", color: "#4CAF50" },
      {
        id: "transfers",
        name: "Transferências",
        icon: "swap-horiz",
        color: "#795548",
      },
      {
        id: "mobile",
        name: "Contatos",
        icon: "phone-android",
        color: "#9C27B0",
      },
    ],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.balanceCard}>
          <View style={styles.userIconContainer}>
            <Icon name="account-circle" size={125} color="#ffffff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.balanceLabel}>Davi Balsan</Text>
            <Text style={styles.balanceAmount}>R$ 4.180,20</Text>
          </View>
        </View>

        <View style={styles.servicesContainer}>
          {services.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.serviceRow}>
              {row.map((service) => (
                <TouchableOpacity
                  key={service.id}
                  style={styles.serviceItem}
                  onPress={() => {
                    // Navigate to appropriate screen based on service
                    if (service.id === "home") {
                      navigation.navigate("Restaurants");
                    } else if (service.id === "transfers") {
                      navigation.navigate("Transactions");
                    } else {
                      // For other services, show a generic service screen
                      // You can implement these based on the mockups
                      console.log(`Selected service: ${service.name}`);
                    }
                  }}
                >
                  <View
                    style={[
                      styles.serviceIcon,
                      { backgroundColor: service.color },
                    ]}
                  >
                    <Icon name={service.icon} size={28} color="#FFFFFF" />
                  </View>
                  <Text style={styles.serviceName}>{service.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.quickActionsContainer}>
          <Text style={styles.quickActionsTitle}>AÇÕES RÁPIDAS</Text>

          <View style={styles.quickActionsRow}>
            <TouchableOpacity
              style={styles.quickActionButton}
              onPress={() => navigation.navigate("DeliveryTracking")}
            >
              <Icon name="location-on" size={24} color="#F9A825" />
              <Text style={styles.quickActionText}>Localização</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionButton}>
              <Icon name="history" size={24} color="#F9A825" />
              <Text style={styles.quickActionText}>Histórico</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  balanceCard: {
    backgroundColor: '#F9A825',
    margin: 0,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
  },
  userIconContainer: {
    margin: 20,
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: '#4CAF50', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column', 
    justifyContent: 'center', 
  },
  balanceLabel: {
    fontSize: 17,
    color: '#ffffff',
  },
  balanceAmount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  servicesContainer: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  serviceItem: {
    alignItems: "center",
    width: "30%",
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 12,
    textAlign: "center",
    color: "#424242",
  },
  quickActionsContainer: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 30,
  },
  quickActionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#424242",
  },
  quickActionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  quickActionButton: {
    alignItems: "center",
    padding: 10,
  },
  quickActionText: {
    fontSize: 14,
    marginTop: 5,
    color: "#424242",
  },
});

export default MainMenuScreen;
