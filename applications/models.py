from django.db import models

class Application(models.Model):
    name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=50)
    email = models.EmailField()
    resume = models.FileField(upload_to='resumes/')

    def __str__(self):
        return self.name
