from django.db import models

class Base(models.Model):
    basename = models.TextField(max_length=100,unique=True)
    def __str__(self):
        return self.basename
    

class connection(models.Model):
    base=models.ForeignKey(Base,on_delete=models.CASCADE,related_name="Base")
    name = models.TextField(max_length=100,unique=True)
    def __str__(self):
        return self.name
    
class connectionsub(models.Model):
    type = models.ForeignKey(connection, on_delete=models.CASCADE, related_name="connection")
    title = models.TextField(max_length=100)
    name = models.TextField(max_length=100, null=True, blank=True)  # New field for image name
    image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.title
    
